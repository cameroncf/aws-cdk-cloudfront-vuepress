import { Duration } from "aws-cdk-lib";
import {
  UserPool,
  UserPoolClient,
  UserPoolDomain,
  VerificationEmailStyle,
} from "aws-cdk-lib/lib/aws-cognito";
import { Construct } from "constructs";

export class CognitoConfiguration extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const userPool = new UserPool(this, "myuserpool", {
      selfSignUpEnabled: true,
      userVerification: {
        emailSubject: "Verify your email for our awesome app!",
        emailBody:
          "Thanks for signing up to our awesome app! Your verification code is {####}",
        emailStyle: VerificationEmailStyle.CODE,
      },
      signInAliases: {
        email: true,
      },
      autoVerify: { email: true },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: true,
        tempPasswordValidity: Duration.days(1),
      },
    });

    new UserPoolDomain(this, "Domain", {
      userPool,
      cognitoDomain: { domainPrefix: "kjh" },
    });

    const userPoolClient = new UserPoolClient(this, "CFClient", {
      userPool,
    });
  }
}
