const mongoose = require('mongoose');
// const validator = require('validator')
const  Schema  = mongoose.Schema;


// user schema

const babysitterSchema = new Schema({
        name: String,
        password: String,
        phone:{
            type: String,
            required: true,
            // unique: true,
            // lowercase: true,
            // validate: (value) => {
            //     return validator.blacklist(value)
            // },
        },
        parents:Array,
        // ?????????-->
        pricePerHour: String,
        setting:{
            hourPrice: String,
        },
        // ????????<--
        
        hourList: [{
            parentID: String,
            date: String,
            startDate: String,
            endDate: String,
            isPaid: Boolean,
            isDelete: Boolean,
        }],
        date: {
            type: Date,
            default: Date.now,
        }

})


// parent schema

const ParentSchema = new Schema({
    name : String,
    phone:{
        type: String,
        required: true,
        // unique: true,
        // lowercase: true,
        // validate: (value) => {
        //     return validator.blacklist(value)
        // },
    },
    babysitterID: Array,
    password:{
       type: String,
       required: true,

    } 
})


// hour schema

const HourListSchema = new Schema({
        parentID: String,
        date: String,
        startDate: String,
        endDate: String,
        isPaid: Boolean,
        isDelete: Boolean,
    })

const parentIdSchema = new Schema({
    ParentId: String,
})


const GreatGrandfatherSchema = new Schema({
    Grandfather: [
        {
            father1:[
                {
                    childe: String,
                }
        ],}
    ],
   
})

const ChildeSchema = new Schema({
    childe: String,
})

const GreatGrandfather = mongoose.model('GreatGrandfather', GreatGrandfatherSchema);
const Babysitter = mongoose.model('User', babysitterSchema);
const Childe = mongoose.model('Childe', ChildeSchema);
const ParentId = mongoose.model('ParentId', parentIdSchema);
const HourList = mongoose.model('Hour', HourListSchema);
const Parent = mongoose.model('Parent', ParentSchema);

module.exports = {
    Babysitter, Parent, HourList, ParentId, GreatGrandfather, Childe,
}

