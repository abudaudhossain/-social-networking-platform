const mongoose = require('mongoose')

const field = {
    token: {
        type: String,
    },
    appToken: {
        type: String
    },
    userToken: {
        type: String
    },
    userAgent: {
        type: Object
    },
    ipAddress: {
        type: String
    },
    source: {
        type: String
    },
    startingDeviceToken: {
        type: String
    },
    endingDeviceToken: {
        type: String
    },
    endedAt: { // UTC Time
        type: Date
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

const sysSessionSchema = mongoose.Schema(field, { timestamps: true })
module.exports = mongoose.model('SysSession', sysSessionSchema)