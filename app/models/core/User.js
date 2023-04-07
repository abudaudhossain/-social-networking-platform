const mongoose = require("mongoose");

const field = {
    name: {
        type: String,
        trim: true,
        required: [true, "User name is required"],
      },
      designation: {
        type: String,
      },
      email: {
        type: String,
        required: [true, "User email is required"],
        unique: [true, "Name must be unique"],
      },
      phone: {
        type: String,
        unique: [true, "Name must be unique"],
      },
      password: {
        type: String,
        required: [true, "User account password is required"],
      },
      image: {
        type: String,
        default: null
      },
      socialMediaAccounts:[
        {
            name:{
                type: String,
            },
            link:{
                type: String
            }
        }
      ],
    
      existence: {
        // true false
        type: Boolean,
        default: true,
      },
     
      logAt: {
        type: Date,
      },

      tokens: [String],
}


const appUserSchema = mongoose.Schema(field, { timestamps: true });

module.exports = mongoose.model('AppUser', appUserSchema)



    //   role: {
    //     //  employee admin
    //     type: String,
    //     required: [true, "User role is required"],
    //     enum: {
    //       values: ["admin", "employee", "visitor"],
    //       message: "User role value can't be {VALUE}, must be admin/employee",
    //     },
    //   },