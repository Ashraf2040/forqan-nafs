"use client"

import { useCookies } from 'react-cookie'

import { useRouter } from 'next/navigation'
import React from 'react'
import axios from 'axios'

import { useState } from 'react'
import { toast } from 'react-toastify'



export default function Login() {
    const [user, setUser] = useState({ email: "",password: "",fullName:""})

 const router = useRouter()
 
  const onSubmit = async(e) => {
    e.preventDefault()
 
    try {

       await axios.post("api/login", user);
    
      toast.success("Login success");
      router.push("/");
      

      const userSent = JSON.stringify(user)
     localStorage.setItem("user",userSent)
          
    } catch (error) {
      toast("Unecpected Error Happened")
    }
  }
  return (
    <div className=" w-4/5 flex items-center justify-center flex-col  ">
      <form

      onSubmit={onSubmit}
        action=""
        className="text-3xl shadow-md shadow-theme  p-20 font-semibold text-theme flex flex-col gap-16"
      >
        <h3 className="text-center ">Login to your account</h3>
        <div className="flex  w-full gap-20 justify-between items-center">
          <label htmlFor="email">E-Mail : </label>
          <input
            className="rounded-md px-8 py-4 bg-slate-100  outline-none"
            type="text"
            id="email"
            name="email"
            placeholder="Type your email"
            onChange={(e) => setUser({...user, email: e.target.value})}
          />
        </div>
        <div className="flex  w-full gap-20 justify-between items-center">
          <label htmlFor="email">Password : </label>
          <input
            className="rounded-md px-8 py-4 bg-slate-100 "
            type="text"
            id="email"
            name="email"
            placeholder="Type your password"
            onChange={(e) => setUser({...user, password: e.target.value})}
          />
        </div>

        <button className=" bg-theme rounded-md py-4 w-4/5 mx-auto text-white">
          Login
        </button>
      </form>
    </div>
  );
}
