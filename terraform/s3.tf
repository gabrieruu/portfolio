resource "aws_s3_bucket" "media" {
  bucket = var.s3_bucket_name
  acl    = "private"

  tags = {
    Name = "MediaBucketPortfolio"
    Type = "S3Bucket"
  }
}

resource "aws_s3_bucket_policy" "media_bucket_policy" {
  bucket = aws_s3_bucket.media.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          AWS = aws_cloudfront_origin_access_identity.origin_identity.iam_arn
        },
        Action   = "s3:GetObject",
        Resource = "${aws_s3_bucket.media.arn}/*"
      }
    ]
  })
}

output "bucket_name" {
  value = aws_s3_bucket.media.bucket
}

output "origin_id" {
  value = aws_s3_bucket.media.id
}
