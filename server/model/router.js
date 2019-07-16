const express                           = require('express');
const route                             = express.Router()
const { Babysitter, Parent, HourList }  = require('./model');
const { route2 }                        = require('./router2');
const { viewRoute  }                        = require('./viewRouter');


// create new row parent
// -----return { n: 0, nModified: 0, ok: 1 }
//  min: not found Schema (not becks the schema not will )
route.post('/add-parent-row', (req, res)=>{
    //////////// wear need to think about the wey the we ar get this param
    let userPhone = "08880880"
    const { date, start, end, } = req.body.row;
    
    const hour = new HourList({
        date: date,
        startDate: start,
        endDate: end,
        isPaid: false,
        isDelete: false,
    })
    
    Babysitter.updateOne({ "parent.$.phone": userPhone},
     {$push:{"parents.hourList": hour}}
     )
    .then(parent=>{
        console.log(parent)
        res.json(parent)})
    .catch(err=>console.log(err, 'יתחולש'))
 
})


// create new parent

route.post('/add-parent', (req, res)=>{
    //////////// wear need to think about the wey the we ar get this param
    let userPhone = "08770770"
    const { name, phone, } = req.body.parent;
    
    const parent = new Parent({
        name,
        phone,

        password: String,
        hourList: [],
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




module.exports = {route, route2, viewRoute}