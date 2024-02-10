"use client";

import { initialState } from "@/app/page";
import { reducer } from "@/app/utils/reducer";
import Image from "next/image";
import Link from "next/link";
import { useReducer } from "react";

function Header() {
  return (
    <header className="flex items-center justify-between mt-4  py-16   px-16 h-60 ">
      <Link href="/">
      <Image
        src="/hero-img.svg"
        width={200}
        height={100}
        alt="logo"
        className="w-60 h-52"
      />
      </Link>
      <h1 className="text-5xl font-bold ">
        BFF-Training Platform <span className="text-theme">(NAFS)</span>
      </h1>

      <div className="flex gap-4">
      <Link href="/login">
        <button className="btn1 bg-theme text-white rounded-full text-bold ">
          Log In
        </button>
      </Link>
      <Link href="/signup">
        <button className="btn1 bg-accent text-white rounded-full text-bold ">
         Register
        </button>
      </Link>
      </div>
    </header>
  );
}

export default Header;
