                                          require('custom-env').env()
const express                           = require('express');
const user                              = express.Router()
const { Babysitter }                    = require('./model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

process.env.SECRET_KEY = 'secret'


// create new row parent
// -----return { n: 0, nModified: 0, ok: 1 }
//  min: not found Schema (not becks the schema not will )



// create a user name
user.post('/babysitter/create-user', (req, res) => {
    let {name, phone, password} = req.body
    
    const babysitter = new Babysitter({
        name,
        password,
        phone,
        parents:[],
        pricePerHour: String,
        setting:{
            hourPrice: String,
        },
        

});
    
    Babysitter.findOne({
        phone
    })
    .then(user=>{
        if(!user) {
            bcrypt.hash(password, 10, (err, hash)=>{
                babysitter.password = hash;
                Babysitter.create(babysitter)
                .then(user=>{
                    console.log({status: user.name + " registered"})
                    res.json({status: user.name + " registered"})
                })
                .catch(err=>{
                    res.send("error: ", err)
                })
            })

        }else{
            console.log({error: "User already exists"})
             res.json({error: "User already exists"})
        }
    })
    .catch(err => {
        console.error(err);
        console.log(err);
        res.status(500).json({ message: 'Error on create-user' })
    })
});
      


// login
user.post("/login", (req, res)=>{
    console.log(req.body)
    Babysitter.findOne({
        phone:  req.body.phone
    })
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                const payload = {
                    _id: user._id,
                    name: user.name,
                    phone: user.phone,
                }
                console.log("hy")
                let token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                console.log("res.send(token)")
                res.send(token)
            }else{
                console.log("res.send({error: 1User does not exist})")

                res.json({error: "User does not exist"})
            }
        }else{
            console.log("res.send({error: User does not exist})")

            res.json({error: "User does not exist"})
        }

    })
    .catch(err => {
        console.error(err);
        console.log(err);
        res.status(500).json({ message: "Error on login" })
    })
})
    


// profile
user.get("/profile", (req, res) => {
    let decoded = jwt.verify(req.headers["authorization"], process.env.SECRET_KEY)

    Babysitter.findOne({
        _id: decoded._id
    })
    .then(user => {
        if(user) {
            res.send(user)
        }else{
            res.send("User does not exist")
        }
    })
    .catch(err => {
        console.error(err);
        console.log(err);
        res.status(500).json({ message: "Error on get profile" })
    })
})    


module.exports = { user }
    