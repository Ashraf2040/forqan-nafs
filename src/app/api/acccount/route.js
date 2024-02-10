
import Accounts from "@/app/models/newAccount"

import { connectTODB } from "@/lib/mongodb"
import { NextApiResponse } from "next" 
import { NextResponse } from "next/server"



export const POST = async(req,res)=>{
    connectTODB()

    try {
        const {email,credit,deposits,withdraw} = await req.json()

        const account = await Accounts.findOne({email})
        if(account){
            return NextResponse.json({message:"this Account is in our database"})
        }
        const newAccount = new Accounts({
            email,
            credit,
            deposits,
            withdraw
        })
        await newAccount.save()

        return NextResponse.json({message : "Welcom to our amazing bank"})
    } catch (error) {
        return NextResponse.json({message : error})
    }
}