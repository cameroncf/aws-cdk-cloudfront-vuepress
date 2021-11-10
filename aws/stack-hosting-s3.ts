import { Bucket } from "aws-cdk-lib/lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/lib/aws-s3-deployment";
import { Construct } from "constructs";

export class S3Configuration extends Construct {
  /**
   *  We'll use a pubic prop to store the buckety reference so
   *  that we can access it from other CDK constructs.
   */
  public bucket: Bucket;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    /**
     *  THE BUCKET
     *
     *  The S3 bucket has public read access turned off and is
     *  not configured for webhosting since we'll always be accessing
     *  it via CloudFront.
     */
    this.bucket = new Bucket(this, "Website", { publicReadAccess: false });

    /**
     *  THE WEBSITE CONTENT
     *
     *  The staticly generated website output from VuePress
     *  ends up in the folder specified here. Since the content will
     *  be changing on each deploy, we need to use an empty source to
     *  make Jest's snapshot testing work reliably.
     */
    const sources =
      process.env.NODE_ENV === "test"
        ? []
        : [Source.asset("www/.vuepress/dist")];

    /**
     *  DEPLOY!
     *
     *  This CDK construct zips up the static site content in "sources"
     *  and deploys it to the bucket created in the steps above.
     */
    new BucketDeployment(this, "Deployment", {
      destinationBucket: this.bucket,
      sources,
    });
  }
}
