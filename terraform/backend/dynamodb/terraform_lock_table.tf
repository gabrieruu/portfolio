resource "aws_dynamodb_table" "terraform_locks" {
  name         = "terraform-lock-table"
  billing_mode = "PAY_PER_REQUEST"

  attribute {
    name = "LockID"
    type = "S"
  }

  tags = {
    Name = "TerraformLockDynamoTable"
    Type = "DynamoTable"
  }

  hash_key = "LockID"
}
