// const useragent = require('useragent'); // module
// const system = require('./system'); // native
const utils = require('./utils'); // native
const { messages } = require('../datasets/messages'); // native

// const SysActivity = require('../models/system/Activity'); // mongoose model


const response = async (v, req, res) => {
    console.log("V", v)
    let message = utils.searchInDataset(messages, v.responseCode); 

    // save activity in database
    newActivity(req, message, v)

    try {

        responseHelper({
            'dataState': message.dataState,
            'message': message,
            'errorLog': v.errorLog,
            'data': v.data,
            'resState': '😎',
        }, v?.status, res)
    } catch (error) {
        // @todo
        responseHelper({
            'dataState': '💣',
            'message': message,
            'errorLog': v.errorLog,
            'data': v.data,
            'resState': '😲'
        }, res)
    }
}

const responseHelper = (v, status, res) => {

    res.status(status).json({
        "responseTimeUTC": new Date().toUTCString(),
        "responseTimeLocal": new Date().toLocaleString(),
        'dataState': v.dataState,
        'message': v.message,
        'errorLog': v.errorLog,
        'data': v.data,
        'resState': v.resState,
        'apiDen': 'HooUwo',
        'apiVersion': 'v1.0.0',
        'stableRelease': 'March 13, 2022',
        'credits': [
            {
                'Section': 'Software And System Architect',
                'People': [
                    {
                        'Name': 'Abu Daud Hossain',
                        'Email': 'abudaud.web@gmail.com',
                        'Image': 'https://i.ibb.co/m6hxS1q/abu-daud.png'
                    }
                ]
            },
            {
                'Section': 'Backend & Web Engines',
                'People': [
                    {
                        'Name': 'Abu Daud Hossain',
                        'Email': 'abudaud.web@gmail.com',
                        'Image': 'https://i.ibb.co/m6hxS1q/abu-daud.png'
                    }
                ]
            },
            {
                'Section': 'Mobile App UI & Integration',
                'People': [
                    {

                    }
                ]
            },
            {
                'Section': 'Web Frontend Design & Integration',
                'People': [
                    {
                        'Name': 'Abu Daud Hossain',
                        'Email': 'abudaud.web@gmail.com',
                        'Image': 'https://i.ibb.co/m6hxS1q/abu-daud.png'
                    }
                ]
            },
            {
                'Section': 'Server Administration',
                'People': [

                    {
                        'Name': 'Abu Daud Hossain',
                        'Email': 'abudaud.web@gmail.com',
                        'Image': 'https://i.ibb.co/m6hxS1q/abu-daud.png'
                    }
                ]
            }

        ]
    });
}

exports.response = response;
