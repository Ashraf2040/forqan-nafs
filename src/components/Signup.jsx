"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      toast("All fields are required");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, fullName }),
      });

      if (res.ok) {
        toast("User has been successfully registered");
        // localStorage.setItem("credit",credit)

        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        toast("Error Occured please try again");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex items-center justify-center flex-col  ">
      <form
        action=""
        onSubmit={handleSubmit}
        className="text-3xl shadow-md shadow-theme   p-20 font-semibold text-theme flex flex-col gap-16"
      >
        <h3 className="text-center ">Sign up free account</h3>
        <div className="flex  w-full gap-20 justify-between items-center">
          <label htmlFor="email">Full Name : </label>
          <input
            className="rounded-md px-8 py-4 bg-slate-100  outline-none"
            type="text"
            id="name"
            name="name"
            placeholder=" Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex  w-full gap-20 justify-between items-center">
          <label htmlFor="email">user name : </label>
          <input
            className="rounded-md px-8 py-4 bg-slate-100  outline-none"
            type="text"
            id="username"
            name="username"
            placeholder=" username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex  w-full gap-20 justify-between items-center">
          <label htmlFor="email">E-Mail : </label>
          <input
            className="rounded-md px-8 py-4 bg-slate-100  outline-none"
            type="text"
            id="email"
            name="email"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex  w-full gap-20 justify-between items-center">
          <label htmlFor="email">Password : </label>
          <input
            className="rounded-md px-8 py-4 bg-slate-100 "
            type="text"
            id="email"
            name="email"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className=" bg-theme rounded-md py-4 w-4/5 mx-auto text-white"
        >
          Sign Up
        </button>
      </form>
    </div>

    //   <div className='flex items-center justify-center mt-8 flex-col font-semibold text-[#f1d18a]'>
    //       <h1  className='bg-[#407088] py-4 rounded-lg  px-8 w-[450px] text-center text-[#fffbe0] font-semibold'>Sign Up For Free Account</h1>
    //       <form className=' px-8 py-8 gap-4 flex flex-col w-[500px] text-[#222831]' onSubmit={handleSubmit}>
    //           <div className='flex justify-between items-center'> <label htmlFor="firstname"> First Name :  </label>
    //           <input className='bg-gray-100 px-4 py-1 rounded-lg'  id='firstname' type='text' placeholder='First name'/></div>
    //          <div className='flex justify-between'><label htmlFor="lastname"> Last Name :</label>
    //           <input className='bg-gray-100 px-4 py-1 rounded-lg' id='lastname'  type='text' placeholder='last name'/></div>
    //          <div className='flex justify-between'><label htmlFor="username">User Name :</label>
    //           <input className='bg-gray-100 px-4 py-1 rounded-lg' id='username'  type='text' placeholder='User Name' onChange={(e)=>setUserName(e.target.value)}/></div>
    //          <div className='flex justify-between'><label htmlFor="email"> E-Mail :</label>
    //           <input className='bg-gray-100 px-4 py-1 rounded-lg' type='email' id='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} /></div>
    //          <div className='flex justify-between' ><label htmlFor="cemail"> Re-Enter Email :</label>
    //           <input className='bg-gray-100 px-4 py-1 rounded-lg' type='email' id='cemail' placeholder='Email Confirmation' /></div>
    //          <div className='flex justify-between'> <label htmlFor="password"> password :</label>
    //       <input className='bg-gray-100 px-4 py-1 rounded-lg' id='password' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} /></div>
    //          <div className='flex justify-between'> <label htmlFor="cpassword">Re-Enter password :</label>
    //           <input className='bg-gray-100 px-4 py-1 rounded-lg'id='cpassword' type='password' placeholder=' confirmation password' /></div>

    //           <button className='bg-[#407088] py-2 rounded-lg text-[#fffbe0] font-semibold' type='submit'>Sign Up</button>
    //           <p className='text-center'>Have an account ? <Link className='text-red-900 font-semibold' href="/login" > Sign In </Link> or <button className='text-[#36626a]' >Sign Up With Google</button></p>

    //   </form>
    // </div>
  );
};

export default Signup;
