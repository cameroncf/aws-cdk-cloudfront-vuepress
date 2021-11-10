import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { S3Bucket } from "./stack-hosting-s3";

export class HostingStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const { bucket } = new S3Bucket(this, "Bucket");
    // 1
  }
}
