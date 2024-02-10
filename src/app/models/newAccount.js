import mongoose from "mongoose";
import { Schema } from "mongoose";



const accountSchema = new Schema ({
    email:{type:String , required:true},
    accountNo :{type:String , required:true},
    credit:{type:Array , required:true},
    deposits:{type:Array},
    withdraw:{type:Array}

},
  
  {timestamps:true}
  
  )


   module.exports =
    mongoose.models.Accounts || mongoose.model('Accounts', accountSchema);