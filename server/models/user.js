import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            min:2,
            max:50
        },

        email:{
            type:String,
            required:true,
            max:50,
            unique:true
        },

        password:{
            type:String,
            required:true,
            min:5
        },

        city:{
            type:String,
            required:false,
            max:20,
        },
        state:{
            type:String,
            required:false,
            max:20,
        },
        country:{
            type:String,
            required:false,
            max:20,
        },
        occupation:{
            type:String,
            required:false,
            max:20,
        },
        phoneNumber:{
            type:String,
            max:12,
            unique:true
        },
        transactions:{
            type:Array,
        },
        role:{
            type:String,
            enum:["user", "admin", "superadmin"],
            default:"admin"
        },

    },
    {timestamps:true}
)

const User = mongoose.model("User",UserSchema)

export default User