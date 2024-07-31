"use client"
import Specials from "./specials"

export default function Mobile(){
    return(
        <div className="flex flex-col items-center justify-center  px-6">
            <div className="h-1 bg-white flex w-full"> </div>

            <div className="w-full h-16 rounded-[30px] backdrop-blur-sm flex bg-[#FFFFFF1A] my-6 items-center justify-between px-7">
                <a href="/" className="font-Dongle text-white text-3xl font-medium"> Order Online </a>
                <a href="/" className="font-Dongle text-white text-3xl font-medium"> Takeaway </a>
                <a href="/" className="font-Dongle text-white text-3xl font-medium"> Catering </a>
            </div>

            <div className="h-1 bg-white flex w-full"> </div>

            <div className="my-6 items-center justify-center">
                <h1 className="text-white text-center font-Dongle underline font-medium text-5xl"> Our Specials </h1>
                <Specials/>
            </div>
                <button className=" text-white h-16 w-48 bg-[#FF3030BF] text-4xl font-Dongle text-center rounded-[30px]"> Order Now </button>

        </div>
    )
}