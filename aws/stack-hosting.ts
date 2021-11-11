import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { createHash } from "crypto";
import { CloudFrontConfiguration } from "./stack-hosting-cloudfront";
import { CognitoConfiguration } from "./stack-hosting-cognito";
import { S3Configuration } from "./stack-hosting-s3";

export class HostingStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const { env } = props;
    const { account, region } = env!;
    const foo = createHash(`${account}`);

    /**
     *  Creates the S3 bucket and deploys the static
     *  site files into it.
     */
    const { bucket } = new S3Configuration(this, "Bucket");

    new CloudFrontConfiguration(this, "Dist", { bucket });

    new CognitoConfiguration(this, "Cognito");
  }
}
