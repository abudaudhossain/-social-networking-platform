// const useragent = require('useragent'); // module
// const system = require('./system'); // native
const utils = require('./utils'); // native


// const SysActivity = require('../models/system/Activity'); // mongoose model


const response = async (v, req, res) => {
    console.log("V", v)

    try {

        responseHelper({
            'errorLog': v.errorLog,
            'data': v.data,
            'resState': '😎',
        }, v?.status, res)
        
    } catch (error) {

        console.log(error,"23")
        // @todo
        responseHelper({
            'dataState': '💣',
            // 'message': message,  
            'errorLog': v.errorLog,
            'data': v.data,
            'resState': '😲'
        }, v?.status ,res)
    }
}

const responseHelper = (v, status, res) => {

    res.status(status).json({
      
        'dataState': v.dataState,

        'errorLog': v.errorLog,
        'data': v.data,
       "code": status
        
    });
}

exports.response = response;
