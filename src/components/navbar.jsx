"use client"
import { UserButton } from "@clerk/nextjs";
import { Map } from 'lucide-react';


const Navbar = () => {

       
    return (

        <div className="flex flex-row justify-between items-center border-b border-gray-300 p-3 m-7 pb-3">
            <div className=" flex flex-row  text-2xl md:text-4xl font-bold text-center">
                <Map  />
                Chat with AI Pshscologist
                </div>
            <div>
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default Navbar;