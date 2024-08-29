terraform {
  backend "s3" {
    bucket         = "terraform-state-${data.aws_caller_identity.current.account_id}"
    dynamodb_table = "terraform-lock-table-${data.aws_caller_identity.current.account_id}"
    region         = var.region
    key            = "backend.tfstate"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = "~> 1.8"
}

module "dynamodb" {
  source = "./dynamodb"
}

module "s3" {
  source = "./s3"
}