import { Distribution } from "aws-cdk-lib/lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/lib/aws-cloudfront-origins";
import { Bucket } from "aws-cdk-lib/lib/aws-s3";
import { Construct } from "constructs";

export class CloudFrontConfiguration extends Construct {
  constructor(scope: Construct, id: string, { bucket }: { bucket: Bucket }) {
    super(scope, id);

    new Distribution(this, "CF", {
      defaultBehavior: { origin: new S3Origin(bucket) },
    });
  }
}
