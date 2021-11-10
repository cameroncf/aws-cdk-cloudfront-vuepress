import { App } from "aws-cdk-lib";
import { HostingStack } from "./stack-hosting";

const env = {
  account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new HostingStack(app, "HostingStack", { env });

app.synth();
