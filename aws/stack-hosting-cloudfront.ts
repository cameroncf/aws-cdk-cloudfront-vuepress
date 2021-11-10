import { Duration } from "aws-cdk-lib";
import {
  CacheCookieBehavior,
  CachePolicy,
  Distribution,
} from "aws-cdk-lib/lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/lib/aws-cloudfront-origins";
import { Bucket } from "aws-cdk-lib/lib/aws-s3";
import { Construct } from "constructs";

export class CloudFrontConfiguration extends Construct {
  constructor(scope: Construct, id: string, { bucket }: { bucket: Bucket }) {
    super(scope, id);

    const cachePolicy = new CachePolicy(this, "Policy", {
      defaultTtl: Duration.minutes(1),
      minTtl: Duration.minutes(1),
      maxTtl: Duration.days(1),
      cookieBehavior: CacheCookieBehavior.none(),
      headerBehavior: CacheCookieBehavior.none(),
      queryStringBehavior: CacheCookieBehavior.none(),
      enableAcceptEncodingGzip: true,
      enableAcceptEncodingBrotli: true,
    });

    new Distribution(this, "CF", {
      defaultBehavior: { origin: new S3Origin(bucket), cachePolicy },
    });
  }
}
