
import { connectTODB } from "@/lib/mongodb";

import User from "@/app/models/NewUser"
// import { NextRequest ,NextResponse } from "next/server";

import { toast } from "react-toastify";


connectTODB()

export const POST = async(req)=>{
  const {username,email,password} = await req.json()
    try {
        const user = await User.findOne({email})
        if(user){
            toast("this user is in our database")
        }
        const salt = bcrypt.genSalt(10)
        const hashedPassword = bcrypt.hash(password ,salt)
        const newUser = new User({
            username,
            password:hashedPassword,
            email,
        })

        await newUser.save()
       return toast("User is successfully registered")

    } catch (error) {
        toast("There is Some Error While registering")
    }
}