const express            = require("express");
const cors               = require("cors");
const bodyParser         = require("body-parser");
const mongoose           = require("mongoose");
const port               = 4000;
const app                = express();
const { route, route2, viewRoute }  = require('./model/router')


mongoose.connect('mongodb://localhost:27017/babysitter', {useNewUrlParser: true})
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
app.use(route2)
app.use(viewRoute)



app.listen(port, ()=>{
    console.log('server up on ' + port);
})