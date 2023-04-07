const mongoose = require("mongoose");

const field = {
    token: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    image: {
        type: String
    },
    phone: {
        type: String
    },

    // common field 
    status: { // active
        type: String
    },
    existence: { // 1
        type: Number
    },
    createdBy: { // @relation
        type: String
    },
    activityToken: { // @relation
        type: String
    }
}


const appUserSchema = mongoose.Schema(field, { timestamps: true });

module.exports = mongoose.model('AppUser', appUserSchema)