resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr

  tags = {
    Name = "AWSMainVPC"
    Type = "VPC"
  }
}

resource "aws_subnet" "public" {
  count                   = length(var.public_subnets)
  vpc_id                  = aws_vpc.main.id
  cidr_block              = element(var.public_subnets, count.index)
  map_public_ip_on_launch = true

  tags = {
    Name = "AWSMainPublicSubnet-${count.index}"
    Type = "Subnet"
  }
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "InternetGateway"
    Type = "IGW"
  }
}

data "aws_route_table" "main" {
  vpc_id = aws_vpc.main.id
  filter {
    name   = "association.subnet-id"
    values = aws_subnet.public[*].id
  }
}

resource "aws_route" "internet_access" {
  route_table_id         = data.aws_route_table.main.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.igw.id
}

output "vpc_id" {
  value = aws_vpc.main.id
}

output "public_subnet_ids" {
  value = aws_subnet.public[*].id
}
