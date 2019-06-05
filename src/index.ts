import Koa = require('koa');
import { connectToDatabase } from './connectToDatabase';

const app = new Koa();

console.log('Loading...');

app.use(async context => {
    context.body = 'Hello World! :D :D';
});

console.log('Listening on 3000...');
app.listen(3000);

connectToDatabase();
