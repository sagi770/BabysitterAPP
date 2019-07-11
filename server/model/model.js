const mongoose = require('mongoose');
const validator = require('validator')
const  Schema  = mongoose.Schema;

const babysitterSchema = new Schema({
    users: {
        name: String,
        password: String,
        phone:  {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: (value) => {
                return validator.blacklist(value)
            }
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
            }]
        }]
    },
})


const Babysitter = mongoose.model('BabysitterVal', babysitterSchema);

module.exports = {
    Babysitter
}
