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
        parents:Array,
        // ?????????-->
        pricePerHour: String,
        setting:{
            hourPrice: String,
        },
        // ????????<--
        
        hourList: [{
            startDate: String,
            endDate: String,
            isPaid: Boolean,
            isDelete: Boolean,
        }],

})


// parent schema

const ParentSchema = new Schema({
    name : String,
    phone:{
        type: String,
        // required: true,
        // unique: true,
        // lowercase: true,
        validate: (value) => {
            return validator.blacklist(value)
        },
    },
    password: String,
})


// hour schema

const HourListSchema = new Schema({
        date: String,
        startDate: String,
        endDate: String,
        isPaid: Boolean,
        isDelete: Boolean,
    })

const parentIdSchema = new Schema({
    ParentId: String,
})


const Babysitter = mongoose.model('User', babysitterSchema);
const ParentId = mongoose.model('ParentId', parentIdSchema);
const HourList = mongoose.model('Hour', HourListSchema);
const Parent = mongoose.model('Parent', ParentSchema);

module.exports = {
    Babysitter, Parent, HourList, ParentId,
}
