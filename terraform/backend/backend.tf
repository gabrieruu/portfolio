terraform {
  backend "s3" {
      bucket         = "terraform-state-${data.aws_caller_identity.current.account_id}"
      dynamodb_table = "terraform-lock-table-${data.aws_caller_identity.current.account_id}"
      region         = var.region
      key            = "backend.tfstate"
  }
}