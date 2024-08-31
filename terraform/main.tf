provider "aws" {
  region = var.aws_region
}

module "vpc" {
  source = "./vpc"
}

module "security_groups" {
  source     = "./security_groups"
  vpc_id     = module.vpc.vpc_id
  web_sg_id  = aws_security_group.web_sg.id
}

module "ec2" {
  source                = "./ec2"
  vpc_id                = module.vpc.vpc_id
  subnet_id             = module.vpc.public_subnet_ids[0]
  web_sg_id             = module.security_groups.web_sg_id
  instance_type         = var.instance_type
  ami_id                = var.ami_id
}

module "s3" {
  source = "./s3"
  bucket_name = var.s3_bucket_name
}

module "cloudfront" {
  source      = "./cloudfront"
  s3_origin_id = module.s3.origin_id
  bucket_name  = module.s3.bucket_name
}

module "route53" {
  source      = "./route53"
  domain_name = var.domain_name
  zone_id     = var.route53_zone_id
  cloudfront_domain_name = module.cloudfront.domain_name
}
