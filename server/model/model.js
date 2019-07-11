const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const babysitterSchema = new Schema({
    users: {
        name: String,
        password: String,
        phone: String,
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


const Babysitter = mongoose.model('Babysitter', babysitterSchema);

module.exports = {
    Babysitter
}
