

import { connectTODB } from "@/lib/mongodb";

import User from "@/app/models/NewUser"
import { NextResponse } from "next/server";



export const GET = async ()=>{

  
    await  connectTODB()

    try {
           const users = await User.find({});
         return NextResponse.json({users})
    } catch (error) {
        
        return NextResponse.json({message : "faild to get data"})
    }


  
    //   const userInfo = await User
  

    


}