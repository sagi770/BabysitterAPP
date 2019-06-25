const express       = require("express");
const cors          = require("cors");
const bodyParser    = require("body-parser");
const mongoose      = require("mongoose");
const port          = 4000;
const app           = express();


mongoose.connect('mongodb://localhost:27017/babysitter', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const babysitter = mongoose.model('app', { 
    users: {
        name: String,
        email: String,
        password: String,
        phone: String,
        setting:{
            hourPrice: String
        },
        parents: [{
            name : String,
            phone : String,
            hourList: [{
                startDate: String,
                startTime: String,
                endDate: String,
                endTime: String,
                isDelete: String,
            }]
        }]
    },
});



app.get('/:email/:name', (req,res)=>{
    let { email, name } = req.params;

    const user = new babysitter({ 
        users: {
            name,
            email,
        }
     });
     user.save().then(() => console.log('meow'));
    res.send(user)
})

// insert parent
// app.get('/user/:id', (req,res) => {
//     let { email, name } = req.params;

//     const user = new babysitter({ 
//         users: {
//             parents: {
//                 name,
//                 email
//             }
//         }
//      });
//      user.save().then(() => console.log('meow'));
//     res.send(user)
// })



app.listen(port, ()=>{
    console.log('server up on ' + port);
})


