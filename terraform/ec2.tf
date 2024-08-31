resource "aws_instance" "web" {
  ami                         = var.ami_id
  instance_type               = var.instance_type
  subnet_id                   = module.vpc.public_subnet_ids[0]
  vpc_security_group_ids      = [module.security_groups.web_sg_id]
  associate_public_ip_address = true
  key_name                    = var.key_name

  user_data = file("scripts/user_data.sh")

  tags = {
    Name = "PortfolioWebServer"
    Type = "EC2Instance"
  }

  depends_on = [
    aws_acm_certificate_validation.cert_validation,
    aws_route53_record.cert_validation
  ]
}
