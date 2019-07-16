const express                     = require('express');
const route                       = express.Router()
const { Babysitter, Parent, HourList }      = require('./model');
const { route2 }                  = require('./router2')


// create new parent

route.post('/add-parent', (req, res)=>{
    //////////// wear need to think about the wey the we ar get this param
    let userPhone = "7777"
    const { name, phone, } = req.body.parent;
    
    const parent = new Parent({
        name,
        phone,

        password: String,
        hourList: [HourList],
    })
    Babysitter.updateOne({ phone: userPhone}, {$push:{parents: parent}})
    .then(parent=>res.json(parent))
    .catch(err=>console.log(err))
 
})



// test to find oun by phone 

route.get("/user", (req, res)=>{

    Babysitter.find({ phone: "2222"})
    .then((baby)=>{
        res.json(baby)
    }).catch(err=>console.log(err))

})



// test: server
route.get('/', (req, res) => {
    res.json('Babysitters');
})


// test: get all the DB
route.get('/babysitter', (req, res) => {
    Babysitter.find()
        .then(Babysitters => {
            res.json(Babysitters);
        }).catch(err => {
            console.error(err);
            console.log(err);
            res.status(500).json({ message: 'Error on get all Babysitters' })
        })
});

// create a user name
route.post('/babysitter/create-user', (req, res) => {
    let {name, phone, password} = req.body.newUser
    
    const babysitter = new Babysitter({
        name, phone, password,
        // 
        pricePerHour: String,
        setting:{
            hourPrice: String,
        },
        parents: []
        
    });

    babysitter.save()
        .then(babysitter => {
            res.json(babysitter);
        }).catch(err => {
            console.error(err);
            console.log(err);
            res.status(500).json({ message: 'Error on add new babysitter' })
        });
});




module.exports = {route,route2}