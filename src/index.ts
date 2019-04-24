import Koa = require('koa');
import mongoose = require('mongoose');

console.log('wat');
const app = new Koa();

console.log('Loading...');

mongoose.connect('mongodb://mongo/myappdb', err => {
    if (err) {
        console.log('aww', err);
        throw err;
    }

    console.log('connected to mongo');
});

app.use(async context => {
    context.body = 'Hello World! :)';
});

console.log('Listening on 3000...');
app.listen(3000);
