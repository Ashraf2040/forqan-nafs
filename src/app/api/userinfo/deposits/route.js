
import User from"@/app/models/NewUser"
import { connectTODB } from "@/lib/mongodb"
import { NextResponse } from "next/server"




export const POST = async (req,res)=>{
const {ids,amount}= await req.json()
console.log(ids,amount)
const amountDeposited =parseInt( JSON.parse(amount))

console.log(amountDeposited)
 const filter = {_id : ids}
 

 const user = await User.findOne (filter) 
  const deposits = user.deposits
  for(let i=0 ; i<deposits.length;i++){
      deposits[i] = parseInt(deposits[i])
  }
const credit = user.credit
    const totalDepositsArray = [...deposits,amountDeposited]
    const totalCredit = totalDepositsArray.reduce((acc,curr)=>acc+curr ,0)
   const update = {deposits : totalDepositsArray,
   credit :totalCredit
   
   }
   console.log(credit)
   console.log(deposits)
  
 
try {
    await connectTODB()
      await User.findOneAndUpdate(filter,update,{new:true})
    return NextResponse.json({message : "Credit has been updated"})
} catch (error) {
    return NextResponse.json({message : error})
}
}