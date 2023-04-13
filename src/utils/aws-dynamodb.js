import * as AWS from 'aws-sdk';

const config = {
    region: 'us-east-1',
    secretAccessKey: 'yN1AR+MFkYrqaOVwFFOGG2z8Sd6yNrDjLu5SVKRl',
    accessKeyId: 'AKIA4YP6PJWLHDIXPOQ2'
}

AWS.config.update(config);

const dynamo = new AWS.DynamoDB.DocumentClient();

const table = 'users';

// Proyecto
export const getData = async () => {
    const params = {
        TableName: table
    }

    const data = await dynamo.scan(params).promise();
    console.log(data);
}

// Proyecto (opcional)
export const addData = async () => {
    const params = {
        TableName: table,
        Item: {
            id_user: 4,
            user: "Ricardo",
            pass: "123"
        }
    }

    const data = await dynamo.put(params).promise()
    console.log(data.$response.httpResponse);
}

// Proyecto (opcional)
export const deleteData = async () => {
    const params = {
        TableName: table,
        Key: {
            id_user: 1
        }
    }

    const data = await dynamo.delete(params).promise();
    console.log(data.$response.httpResponse);
}

// Proyecto (opcional)
export const updateData = async () => {
    const params = {
        TableName: table,
        Key: {
            id_user: 4
        },
        UpdateExpression: 'set user = :user, pass = :pass',
        ExpressionAttributeValues: {
            ':user': 'Nuevo usuario',
            ':pass': '1234'
        }
    }

    const data = await dynamo.update(params).promise();
    console.log(data.$response.httpResponse);
}