import { Stack } from "aws-cdk-lib";
import { Construct } from "constructs";
import { S3Bucket } from "./stack-hosting-s3";

export class HostingStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const { bucket } = new S3Bucket(this, "Bucket");
  }
}
