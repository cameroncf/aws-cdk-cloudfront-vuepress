import { App } from "aws-cdk-lib";
import { HostingStack } from "./stack-hosting";

const app = new App();

new HostingStack(app, "HostingStack");

app.synth();
