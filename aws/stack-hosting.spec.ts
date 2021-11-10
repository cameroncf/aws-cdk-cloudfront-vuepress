import { SynthUtils } from '@aws-cdk/assert';
import { App } from 'aws-cdk-lib';
import { HostingStack } from './stack-hosting';

test('happy path', () => {
  const app = new App();
  const result = new HostingStack(app, 'Test');
  expect(SynthUtils.toCloudFormation(result)).toMatchSnapshot();
});
