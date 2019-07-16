const mongoose = require('mongoose');
const validator = require('validator')
const  Schema  = mongoose.Schema;


// user schema

const babysitterSchema = new Schema({
        name: String,
        password: String,
        phone:{
            type: String,
            // required: true,
            // unique: true,
            // lowercase: true,
            validate: (value) => {
                return validator.blacklist(value)
            },
        },
        
        pricePerHour: String,
        setting:{
            hourPrice: String,
        },
        parents: [{
            name : String,
            phone : String,
            password: String,
            hourList: [{
                startDate: String,
                endDate: String,
                isPaid: Boolean,
                isDelete: Boolean,
            }],
        }],
})


// parent schema

const ParentSchema = new Schema({
    name : String,
    phone : String,
    password: String,
    hourList: [{
        startDate: String,
        endDate: String,
        isPaid: Boolean,
        isDelete: Boolean,
    }],
})


// hour schema

const HourListSchema = new Schema({
        startDate: String,
        endDate: String,
        isPaid: Boolean,
        isDelete: Boolean,
    })



const Babysitter = mongoose.model('User', babysitterSchema);
const HourList = mongoose.model('Hour', HourListSchema);
const Parent = mongoose.model('Parent', ParentSchema);

module.exports = {
    Babysitter, Parent, HourList
}
