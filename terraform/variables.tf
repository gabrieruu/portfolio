variable "aws_region" {
  description = "AWS region to deploy resources"
  default     = "sa-east-1"
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  default     = "10.0.0.0/16"
}

variable "public_subnets" {
  description = "List of public subnet CIDR blocks"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "instance_type" {
  description = "EC2 instance type"
  default     = "t2.micro"
}

variable "ami_id" {
  description = "AMI ID for the web server"
  default     = "ami-02fa57d93f94ce999" # Amazon Linux 2023 AMI 2023.5.20240819.0 x86_64 HVM kernel-6.1
}

variable "s3_bucket_name" {
  description = "Name of the S3 bucket for media files"
}

variable "domain_name" {
  description = "Domain name for Route53"
}

variable "route53_zone_id" {
  description = "Route53 Hosted Zone ID"
}

variable "key_name" {
  description = "Key pair name for SSH access"
}

variable "allowed_ssh_ip" {
  description = "IP address allowed to SSH into the EC2 instance"
}
