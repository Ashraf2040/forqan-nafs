import { connectTODB } from "@/lib/mongodb";

import User from "@/app/models/NewUser"
import { NextResponse } from "next/server";
// import SignIn from "next-auth"
// import bcrypt from "bcryptjs"




connectTODB()


export const POST = async(req)=>{

    
    try {
        const reqBody = await req.json()
        const {email, password} = reqBody;

        const user = await User.findOne( {email})
        if(!user){
       return NextResponse.json({message : "THe user is not exist"},{status:400})
        }
     
      //  check the password//
       if(user.password!== password){
        return NextResponse.json({message:"passwords dont match"},{status:500})
       }
      
      // Create token data //
 const tokenData = {
    id: user._id,
    username : user.username,
    email:user.email,
    fullname:user.fullname,
 }

 // Create token //

 const token = jwt.sign(tokenData, process.env.NEXT_SECRET, { expiresIn: "1d" })

   const response = NextResponse.json({
    message : "Loging successful",
    success:true
   })

   response.cookies.set("token" ,token,{httpOnly:true})
   return response
    } catch (error) {

        return NextResponse.json({message :"The user not found"})
        
    }
}