#!/bin/bash

set -e

ACCOUNT_ID=$(aws sts get-caller-identity --query "Account" --output text)
TERRAFORM_BACKEND=$GITHUB_WORKSPACE/terraform/backend
BUCKET_NAME="terraform-state-${ACCOUNT_ID}"
DYNAMODB_TABLE_NAME="terraform-lock-table-${ACCOUNT_ID}"

if ! aws s3api head-bucket --bucket "$BUCKET_NAME" 2>/dev/null; then
  echo "Backend S3 bucket does not exist. Creating..."

  cd $TERRAFORM_BACKEND/backend-override
  terraform init
  terraform apply -auto-approve
else
  echo "Backend S3 bucket already exists. Continuing..."
fi

echo "Initializing S3 backend..."
cd $TERRAFORM_BACKEND
terraform init -migrate-state -force-copy
