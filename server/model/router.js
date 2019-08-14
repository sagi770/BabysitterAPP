require('custom-env').env()
const express                           = require('express');
const route                             = express.Router()
const { Babysitter, Parent,
        HourList, ParentId, }           = require('./model');
const { viewRoute  }                    = require('./viewRouter');



// get user by ID 
route.get("/:user_id", (req, res)=>{
    const _id = req.params.user_id;
     
    Babysitter.findById(_id).then(result=>{
         let wait = result.parents.map( itm => {
            // console.log(itm)
            let parent = Parent.findById(itm.ParentId).then( parent =>{
                            result.parents.push(parent) 
                            result.parents.splice(0, 1)
            })

            return parent
        });
        Promise.all(wait).then(() => {
            res.json({result})
        });
    })
    .catch(err=>{
        console.log(err);
        res.json({status:404,message:'user not exist', parents: ['not found']})
    })
   

});


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
    
    Babysitter.updateOne({ phone: userPhone},
     {$push:{ hourList: hour}}
     )
    .then(parent=>{
        console.log(parent)
        res.json(parent)})
    .catch(err=>console.log(err, 'יתחולש'))
 
})


// create new parent

route.post('/add-parent', (req, res)=>{
    //////////// wear need to think about the wey the we ar get this param
    const { name, phone, user_id, } = req.body.parent;
    
    const parent = new Parent({
        name,
        phone,
        password: String,
    })
    Babysitter.findByIdAndUpdate(user_id).then(user=>{
        
    })
    
    parent.save()
    .then(parent => {
        console.log(parent);
        const parentId = new ParentId({
            ParentId: parent._id
        });
        console.log("user_id",user_id);
        console.log("parentId",parentId);
        Babysitter.findByIdAndUpdate(user_id,
                {$push:{ parents: parentId }},
                {useFindAndModify: false}
                ).then(user=>{
                    console.log("user:",user)
            })
            res.json(parent);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error on add new parent' })
        });
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
        parents: Array,
        hourList: [],
        
    });

    babysitter.save()
        .then(babysitter => {
            res.json(babysitter);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error on add new babysitter' })
        });
});




module.exports = {route, viewRoute}