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
route.post('/babysitter/create', (req, res) => {

    

    const babysitter = new Babysitter({
        users: {
            name: 'sara',
            password: '770770',
            phone: '070770770',
            pricePerHour: '20',
            parents: [{
                name : 'moshe',
                phone : '070770770',
                password: '770',
                hourList: [{
                    startDate: 'String',
                    endDate: 'String',
                    isPaid: true,
                    isDelete: false,
                }]
            }]
        }
    })

    babysitter.save()
        .then(babysitter => {
            res.json(babysitter);
        }).catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Error on add new babysitter' })
        })
})



module.exports = {route}