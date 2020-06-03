1. Edit `init_config_command.sh` // Replace values with your values
2. Run `init_config_command.sh`
3. Run `npm run setup` (Windows users: `npm run win-setup`) - this installs the node dependencies, creates an S3 bucket (if it does not already exist), packages and deploys your serverless Express application to AWS Lambda, and creates an API Gateway proxy API.
4. After the setup command completes, open the AWS CloudFormation console https://console.aws.amazon.com/cloudformation/home and switch to the region you specified. Select the `AwsServerlessExpressStack` stack, then click the `ApiUrl` value under the __Outputs__ section - this will open a new page with your running API. The API index lists the resources available in the example Express server (`app.js`), along with example `curl` commands.
5. Run `update.sh` to push your local changes
