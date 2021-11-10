import { Bucket } from "aws-cdk-lib/lib/aws-s3";
import { Construct } from "constructs";

export class S3Bucket extends Construct {
  public bucket: Bucket;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.bucket = new Bucket(this, "Website", { publicReadAccess: false });
  }
}
