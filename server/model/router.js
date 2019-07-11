const express = require('express');
const route = express.Router()
const { Babysitter } = require('./model');

route.get('/', (req, res) => {
    
            res.json('Babysitters');
        })

route.get('/babysitter', (req, res) => {
    Babysitter.find()
        .then(Babysitters => {
            res.json(Babysitters);
        }).catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Error on get all Babysitters' })
        })
});
route.post('/babysitter/create/:name', (req, res) => {
    let {name} = req.param;
    

    const babysitter = new Babysitter({
        users:{
            name: name
        }
    });

    babysitter.save()
        .then(babysitter => {
            res.json(babysitter);
        }).catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Error on add new babysitter' })
        });
});



module.exports = {route}