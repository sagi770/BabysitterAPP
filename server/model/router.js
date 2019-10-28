                                          require('custom-env').env()
const express                           = require('express');
const route                             = express.Router()
const { Babysitter, Parent,
        HourList, }                     = require('./model');
const { user, }                         = require('./user');




// route.get("/test/:bid/:pid", (req,res)=>{
//     console.log("hy")
//     let { bid, pid, sid } = req.params;
//     let newHour = {ff:"hf22gtt55555333555555g2f", rr: "6666444444444444444446"}
//     Babysitter.findOne({'parents._id': pid})
//     .then(result => {
//         let newResult = result.parents.map(item=>{
//             if(item._id == pid){
//                 item.son.push(newHour);
//                 console.log(item)
//             }
//             return item
//         })
//         // result.parents = newResult

//         Babysitter.findByIdAndUpdate(bid, {parents: newResult}, {new: true})
//         .then(newRes =>{
//                console.log(newRes)
//             res.json(newRes)
//         })
        
//     })
// })






// // 
// route.post('/add-parent-row', (req, res)=>{
//     //////////// wear need to think about the wey the we ar get this param
//     let userPhone = "0527707700"
//     const { date, start, end, parentID } = req.body.row;
    
//     const hour = new HourList({
//         parentID,
//         date,
//         startDate: start,
//         endDate: end,
//         isPaid: false,
//         isDelete: false,
//     })
    
//     Babysitter.updateOne({ phone: userPhone},
//         {$push:{ hourList: hour}}
//         )
//     .then(parent=>{
//         console.log(parent)
//         res.json(parent)})
//     .catch(err=>console.log(err, 'יתחולש'))

// })

route.post('/add_hour', (req, res)=>{
    const {from, to, date, user_id, total, parent_id, } = req.body;
    console.log(";;;;;;;;;;", req.body)
    


    const hourList = new HourList({
        date,
        startDate: from,
        endDate: to,
        total,
        isPaid: false,
        isDelete: false,
    })

        Babysitter.findOne({'parents._id': parent_id })

    .then(result => {
        console.log(result)
        let newResult = result.parents.map(item=>{
            if(item._id == parent_id){
                item.hourList.push(hourList);
                console.log(item)
            }
            return item
        })
        result.parents = newResult
        
            console.log(":::::::::::::::",result.parents)
            Babysitter.findByIdAndUpdate(user_id, {parents: newResult}, {new: true})
                    .then(newRes =>{
                           console.log(newRes)
                        res.json(newRes)
                    })

        })

    // res.send("hy")

})

route.post("/add_parent", (req, res) => {
    const { name, phone, user_id, } = req.body;

    const parent = new Parent({
        name,
        phone,
        password: "",
        total: 0,
        hourList: []
    })

    Babysitter.findByIdAndUpdate(user_id,
        {$push:{ parents: parent }},
        {new: true}
        )
        .then(user=>{
            console.log("user:",user)
            res.json(user);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Error on add new parent' })
    });
});



route.get("/parent_list/:babysitter_id", (req,res)=>{
    const _id = req.params.babysitter_id;

    Babysitter.findById(_id)
    .then(result=>{
        console.log(result)
        res.json(result.parents)
    })
    .catch(err => {
        console.error(err);
        console.log(err);
        res.status(500).json({ message: 'Error on get parents list' })
    })
})



route.get("/parentHour/:User_id/:parent_id", (req, res) => {
    let { User_id, parent_id, } = req.params;
    let hourList
    console.log({parent: req.params})

    Babysitter.findById(User_id)

    .then(result=>{
        console.log(result)
        result.parents.map(item => {
            if(item._id === parent_id) {
                hourList = [item.hourList]
            }
        })
        console.log(hourList)
        return res.json(hourList)
    })
    .catch(err => {
        console.error(err);
        console.log(err);
        res.status(500).json({ message: 'Error on get hour list' })
    })

})














// create new parent

// route.post('/add_parent', (req, res)=>{
//     const { name, phone, babysitter_id, } = req.body;
    
//     const parent = new Parent({
//         name,
//         phone,
//         babysitter_id,
//         password: String,
//     })
    
//     parent.save()
//     .then(parent => {
//         console.log(parent);
//         const parentId = new ParentId({
//             ParentId: parent._id
//         });
//         console.log("babysitter_id",babysitter_id);
//         console.log("parentId",parentId);
//         Babysitter.findByIdAndUpdate(babysitter_id,
//             {$push:{ parents: parentId }},
//             {useFindAndModify: false}
//             ).then(user=>{
//                 console.log("user:",user)
//             })
//             res.json(parent);
//         }).catch(err => {
//             console.log(err);
//             res.status(500).json({ message: 'Error on add new parent' })
//         });
//         // Babysitter.findByIdAndUpdate(babysitter_id).then(user=>{
            
//         // })
//     })
    
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
    
    
    
    route.get("/parentView/:user_id", (req,res)=>{
        const _id = req.params.user_id;
        
        const parentID = "5d540e7cf53e0e18b4d0fada";
        let HourList = []
    
        Babysitter.findById(_id).then(result=>{
            let wait = result.hourList.map(Item=>{
                if(Item.parentID == parentID){
                    HourList.push(Item)
                }else{
                    return "dd"
                }
            })
            res.json(HourList)
            // let wait = 
        })
    })
   
    
    // get user by ID 
    route.get("/user/:user_id", (req, res)=>{
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
    module.exports = {route, user}