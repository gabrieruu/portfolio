variable "region" {
  description = "AWS region to deploy infra"
  type        = string
  default     = "sa-east-1"
}

variable "access_key" {
  description = "AWS IAM Access Key ID"
  type        = string
}

variable "secret_key" {
  description = "AWS IAM Secret Key"
  type        = string
}