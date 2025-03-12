import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection (connecting to mongodb database)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb');

//bodyparser setup (helps to parse the body of incoming requests and json back and forth between mongodb and our server)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is  running on port ${PORT}`)
);

app.listen(PORT,() =>
    console.log(`Your server is running on port ${PORT}`)
);