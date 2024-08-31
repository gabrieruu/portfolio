output "web_server_public_ip" {
  value = aws_instance.web.public_ip
}

output "s3_bucket_name" {
  value = module.s3.bucket_name
}

output "cloudfront_distribution_domain" {
  value = module.cloudfront.domain_name
}

output "route53_record_fqdn" {
  value = aws_route53_record.cdn_record.fqdn
}
