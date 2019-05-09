import Koa = require('koa');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test-user_1:<password>@cluster0-dojin.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err: any) => {
    console.log('connected to db!', err);
    // const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


const app = new Koa();

console.log('Loading...');

app.use(async context => {
    context.body = 'Hello World! :D :D';
});

console.log('Listening on 3000...');
app.listen(3000);
