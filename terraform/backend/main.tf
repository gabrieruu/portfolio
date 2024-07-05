terraform {
  backend "s3" {
    bucket         = "terraform-state-381491983236"
    dynamodb_table = "terraform-lock-table"
    region         = "sa-east-1"
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

provider "aws" {
  access_key = var.access_key
  secret_key = var.secret_key
  region = var.region
}

module "dynamodb" {
  source = "./dynamodb"
}

module "s3" {
  source = "./s3"
}