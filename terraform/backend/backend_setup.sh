#!/bin/bash

set -e

ACCOUNT_ID=$(aws sts get-caller-identity --query "Account" --output text)
TERRAFORM_BACKEND=$GITHUB_WORKSPACE/terraform/backend
BUCKET_NAME="terraform-state-$ACCOUNT_ID"
DYNAMODB_TABLE_NAME="terraform-lock-table-$ACCOUNT_ID"
AWS_REGION="sa-east-1"
STATE_KEY="backend.tfstate"

if ! aws s3api head-bucket --bucket "$BUCKET_NAME" 2>/dev/null; then
  echo "Backend S3 bucket does not exist. Creating..."
  cd $TERRAFORM_BACKEND/backend-provision
  terraform init
  terraform apply -auto-approve

  echo "Creating main.tf for the backend..."
  cd $TERRAFORM_BACKEND
  rm config.s3.tfbackend
  echo "bucket         = ${BUCKET_NAME}" > config.s3.tfbackend
  echo "dynamodb_table = ${DYNAMODB_TABLE_NAME}" >> config.s3.tfbackend
  echo "region         = ${AWS_REGION}" >> config.s3.tfbackend
  echo "key            = ${STATE_KEY}" >> config.s3.tfbackend
  cat config.s3.tfbackend

else
  echo "Backend S3 bucket already exists. Continuing..."
  echo "bucket         = ${BUCKET_NAME}" > config.s3.tfbackend
  echo "dynamodb_table = ${DYNAMODB_TABLE_NAME}" >> config.s3.tfbackend
  echo "region         = ${AWS_REGION}" >> config.s3.tfbackend
  echo "key            = ${STATE_KEY}" >> config.s3.tfbackend
  cat config.s3.tfbackend
fi

# echo "Initializing S3 backend..."
# cd $TERRAFORM_BACKEND
# terraform init -migrate-state -force-copy
