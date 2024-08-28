#!/bin/bash

set -e

ACCOUNT_ID=$(aws sts get-caller-identity --query "Account" --output text)
TERRAFORM_BACKEND=$GITHUB_WORKSPACE/terraform/backend
BUCKET_NAME="terraform-state-${ACCOUNT_ID}"
DYNAMODB_TABLE_NAME="terraform-lock-table-${ACCOUNT_ID}"

echo "echoing script variables..."
echo $ACCOUNT_ID
echo $TERRAFORM_BACKEND
echo $BUCKET_NAME
echo $DYNAMODB_TABLE_NAME

if ! aws s3api head-bucket --bucket "$BUCKET_NAME" 2>/dev/null; then
  echo "Backend S3 bucket does not exist. Creating..."

  terraform init -chdir=$TERRAFORM_BACKEND -backend-config=backend_override.tf
  terraform apply -chdir=$TERRAFORM_BACKEND -auto-approve
else
  echo "Backend S3 bucket already exists. Continuing..."
fi

echo "Initializing S3 backend..."
terraform init -chdir=$TERRAFORM_BACKEND
terraform state push local.tfstate -chdir=$TERRAFORM_BACKEND
