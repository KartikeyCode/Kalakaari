"use client"
import Image from "next/image";
import Specials from "./specials"
import { useRouter } from "next/navigation"
export default function Mobile(){
    const router = useRouter();
    return(
        <div className="flex flex-col items-center justify-center  px-6">
            <div className="h-1 bg-white flex w-full"> </div>

            <div className="w-full h-16 rounded-[30px] backdrop-blur-sm flex bg-[#FFFFFF1A] my-6 items-center justify-between px-7">
                <a href="/" className="font-Dongle text-white text-2xl font-medium"> Order Online </a>
                <a href="/" className="font-Dongle text-white text-2xl font-medium"> Takeaway </a>
                <a href="/" className="font-Dongle text-white text-2xl font-medium"> Catering </a>
            </div>

            <div className="h-1 bg-white flex w-full"> </div>

            <div className="my-6 items-center justify-center">
                <h1 className="text-white text-center font-Dongle underline font-medium text-5xl"> Our Specials </h1>
                <Specials/>
            </div>
                <button type="button" onClick={()=>router.push('/')} className=" text-white h-16 w-48 bg-[#FF3030BF] text-4xl font-Dongle text-center rounded-[30px]"> Order Now </button>
            
            <div className="flex flex-col self-start gap-2 mt-7">
                <div className="flex gap-4 items-center"> 
                    <Image src="/whitemail.png" width={24} height={24} />
                    <h1 className="text-white text-sm"> info@kalakaarikitchen.com </h1>
                </div>
                <div className="flex gap-4 items-center"> 
                    <Image src="/whitephone.png" width={24} height={24} />
                    <h1 className="text-white text-sm"> +91 99900 70307 </h1>
                </div>
                <div className="flex gap-4 items-center"> 
                    <Image src="/whitelocation.png" width={24} height={24} />
                    <h1 className="text-white text-sm w-60"> 2nd Floor, Vijaya Complex, Vakil Market, Chanderlok, DLF City IV, Sector 28, Gurugram, Haryana 122002 </h1>
                </div>
            </div>
            <div className="lg:hidden bg-[#6F645E] h-11 rounded-[30px] px-6 flex gap-4 items-center my-4">
            <a href="/" className="hover:scale-105 transition-all text-white lg:text-lg xl:text-xl 2xl:text-2xl"> Home </a>
            <a href="/" className="hover:scale-105 transition-all text-white lg:text-lg xl:text-xl 2xl:text-2xl"> About </a>
            <a href="/" className="hover:scale-105 transition-all text-white lg:text-lg xl:text-xl 2xl:text-2xl"> Menu </a>
            <a href="/" className="hover:scale-105 transition-all text-white lg:text-lg xl:text-xl 2xl:text-2xl"> Gallery </a>
            <a href="/" className="hover:scale-105 transition-all text-white lg:text-lg xl:text-xl 2xl:text-2xl text-nowrap"> Contact Us </a>
            
        </div>
        </div>
    )
}