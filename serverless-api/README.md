# serverless-api

Serverless TypeScript API apps with following libraries:

* [Serverless Framework](https://www.serverless.com/)
* [Serverless DynamoDB Local](https://www.serverless.com/plugins/serverless-dynamodb-local)
* [Serverless Offline](https://github.com/dherault/serverless-offline)

## Run locally

1. Execute `npm ci` command to install packages.
2. Execute `npx sls dynamodb install` command to install `serverless-dynamodb-local`, enabling you to emulate Amazon DynamoDB locally.
3. Execute `npm run deploy` command to run app locally. Console will show you API endpoints. You can easily manage local DynamoDB data with GUI by `npm run dynamodb-admin` command.

## Deploy apps to AWS

1. Execute `npm ci` command to install packages (if you haven't yet).
2. Create a deployment bucket for Serverless Framework. Use the AWS CloudFormation template file `cloudformation/deployment-bucket.yaml`. 
3. Execute `npm run deploy` command to deploy serverless apps.

## Usage

You can create, retrieve, update, or delete todos with the following commands:

### Create a Todo

```bash
curl -X POST https://XXXXXXX.execute-api.ap-northeast-1.amazonaws.com/dev/todos --data '{ "text": "Learn Serverless" }'
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

### List all Todos

```bash
curl https://XXXXXXX.execute-api.ap-northeast-1.amazonaws.com/dev/todos
```

Example output:
```bash
[{"text":"Deploy my first service","id":"ac90feaa11e6-9ede-afdfa051af86","checked":true,"updatedAt":1479139961304},{"text":"Learn Serverless","id":"206793aa11e6-9ede-afdfa051af86","createdAt":1479139943241,"checked":false,"updatedAt":1479139943241}]%
```

### Get one Todo

```bash
# Replace the <id> part with a real id from your todos table
curl https://XXXXXXX.execute-api.ap-northeast-1.amazonaws.com/dev/todos/<id>
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

### Update a Todo

```bash
# Replace the <id> part with a real id from your todos table
curl -X PUT https://XXXXXXX.execute-api.ap-northeast-1.amazonaws.com/dev/todos/<id> --data '{ "text": "Learn Serverless", "checked": true }'
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":true,"updatedAt":1479138570824}%
```

## To Do
- [ ] Add CloudFront
- [ ] Add delete ToDo API
- [ ] Change port
- [ ] Add API driver
- [ ] Add test

## References

|Reference|Details|
|-|-| 
|[aws-node-typescript-rest-api-with-dynamodb](https://github.com/serverless/examples/tree/v3/aws-node-typescript-rest-api-with-dynamodb)|Serverless Framework official example|