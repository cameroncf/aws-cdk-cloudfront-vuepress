# aws-cdk-cloudfront-vuepress
Demo of using VuePress on AWS, deployed by the CDK.

Libraries

- AWS CDK v2 (currently RC) (https://docs.aws.amazon.com/cdk/latest/guide/work-with-cdk-v2.html)
- Typescript
- Jest
- VuePress
- Cognito@Edge (https://github.com/awslabs/cognito-at-edge)

Expect you've already done this at AWS

- Create AWS account
- Setup MFA on Root User
- Setup Billing Alarm

To prepare for deployments using the CDK:

- Make sure CDK is bootstrapped (https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html)
- Create IAM user
- Use this policy
- Note the Key and secret, securely.

[Policy here]

To prepare GitHub to Automate the deployment

- Add secrets to github secrets

AWS_ACCESS_KEY_ID: 
AWS_SECRET_ACCESS_KEY: 
AWS_DEFAULT_REGION: "us-east-1"
CDK_DEPLOY_ACCOUNT:
CDK_DEPLOY_REGION:  "us-east-1"


other examples
AWS (https://github.com/aws-samples/aws-cdk-examples)

# Blog Posts


## How to setup AWS for CDK use

### To bootstraping account

cdk bootstrap aws://ACCOUNT-NUMBER-1/REGION-1 

cdk bootstrap aws://928423398579/us-east-1

### Deployer IAM user and permissions 


## How to configure Github for 

- AWS keys
- CDK specific keys

## first deploy

take a little while
any changes to cloudfront config will take time
luckjily, routine changes only change the S3 bucket so they are faster!
