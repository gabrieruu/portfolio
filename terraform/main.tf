terraform {
  required_version = ">= 0.12"
  backend "s3" {
    bucket = "terraform-state-381491983236"
    key    = "terraform.tfstate"
    region = "sa-east-1"
  }
  
}

provider "aws" {
  region = var.aws_region
}
