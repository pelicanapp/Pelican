import { readAppSettings } from './config/readAppSettings';

const MongoClient = require('mongodb').MongoClient;

export async function connectToDatabase() {
    const appSettings: any = await readAppSettings();
    const uri = `mongodb+srv://test-user_1:${
        appSettings.mongo
    }@cluster0-dojin.mongodb.net/test?retryWrites=true`;
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect((err: any) => {
        console.log('connected to db!', err);
        // const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    });
}
