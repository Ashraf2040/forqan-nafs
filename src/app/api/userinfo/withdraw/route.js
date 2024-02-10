
import User from"@/app/models/NewUser"
import { connectTODB } from "@/lib/mongodb"
import { NextResponse } from "next/server"




export const POST = async (req,res)=>{
const {ids,amount}= await req.json()
console.log(ids,amount)
const amountWithdrawed =parseInt( JSON.parse(amount))

console.log(amountWithdrawed)
 const filter = {_id : ids}
 

 const user = await User.findOne (filter) 
  const withdrawal = user.withdraw
  for(let i=0 ; i<withdrawal.length;i++){
      withdrawal[i] = parseInt(withdrawal[i])
  }
const credit = user.credit
    const totalWithdrawalArray = [...withdrawal,amountWithdrawed]
    const totalwithdrawed = totalWithdrawalArray.reduce((acc,curr)=>acc+curr ,0)
   const update = {withdraw : totalWithdrawalArray,
   credit : credit-totalwithdrawed
   
   }
   console.log(credit)
   console.log(withdrawal)
  
 
try {
    await connectTODB()
      await User.findOneAndUpdate(filter,update,{new:true})
    return NextResponse.json({message : "Credit has been updated"})
} catch (error) {
    return NextResponse.json({message : error})
}
}