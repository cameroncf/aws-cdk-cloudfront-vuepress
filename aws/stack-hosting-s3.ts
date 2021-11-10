import { Bucket } from "aws-cdk-lib/lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/lib/aws-s3-deployment";
import { Construct } from "constructs";

export class S3Bucket extends Construct {
  public bucket: Bucket;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.bucket = new Bucket(this, "Website", { publicReadAccess: false });

    // since this changes a lot, mock it in tests
    const sources =
      process.env.NODE_ENV === "test"
        ? []
        : [Source.asset("www/.vuepress/dist")];

    new BucketDeployment(this, "Deployment", {
      destinationBucket: this.bucket,
      sources,
    });
  }
}
