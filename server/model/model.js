const mongoose = require('mongoose');
const validator = require('validator')
const  Schema  = mongoose.Schema;


//////////// user schema

const babysitterSchema = new Schema({
        name: String,
        password: String,
        phone:{
            type: String,
            required: true,
            // unique: true,
            // lowercase: true,
            validate: (value) => {
                return validator.blacklist(value)
            },
        },
        parents:[{
            name : String,
            phone:{
                type: String,
                required: true,
                // unique: true,
                // lowercase: true,
                validate: (value) => {
                    return validator.blacklist(value)
                },
            },
            password:{
                type: String,
                required: true,
        
            },
            total: Number,
            hourList: [{
                date: String,
                startDate: String,
                endDate: String,
                total: Number,
                isPaid: Boolean,
                isDelete: Boolean,
            }]
        }],
        pricePerHour: String,
        setting:{
            hourPrice: String,
        },
        date: {
            type: Date,
            default: Date.now,
        },

})






///////// parent schema

const ParentSchema = new Schema({
    name : String,
    phone:{
        type: String,
        required: true,
        // unique: true,
        // lowercase: true,
        validate: (value) => {
            return validator.blacklist(value)
        },
    },
    password:{
        type: String,
        required: true,

    },
    total: Number,
    hourList: [{
        date: String,
        startDate: String,
        endDate: String,
        total: Number,
        isPaid: Boolean,
        isDelete: Boolean,
    }]
})








/////////// hour schema

const HourSchema = new Schema({
        parentID: String,
        date: String,
        startDate: String,
        endDate: String,
        total: Number,
        isPaid: Boolean,
        isDelete: Boolean,
    })





const Babysitter = mongoose.model('User', babysitterSchema);
const HourList = mongoose.model('Hour', HourSchema);
const Parent = mongoose.model('Parent', ParentSchema);

module.exports = {
    Babysitter, Parent, HourList,
}

