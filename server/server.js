                           require('custom-env').env()
const express            = require("express");
const cors               = require("cors");
const bodyParser         = require("body-parser");
const mongoose           = require("mongoose");
mongoose.Promise         = global.Promise;
const port               = process.env.PORT;
const app                = express();
const { route,  user }  = require('./model/router')

const debug = true;
let connectionString;

if(debug){
    connectionString = process.env.DEBUG_CONNECTIONS_DB
}
else{
    connectionString = process.env.PRODUCTION_CONNECTIONS_DB
}

mongoose.connect(connectionString , {useNewUrlParser: true})
.then(() => {
    console.log('Connect to babysitter');
})
.catch(err => {
    console.error(err);
});



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(route)
app.use(user)



app.listen(port, ()=>{
    console.log('server up on ' + port);
})