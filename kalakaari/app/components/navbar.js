import Image from "next/image"
export default function Navbar(){
    return(
    <div className="flex px-6 py-7 2xl:px-12 2xl:py-14  items-center z-10">
        <div className="flex items-center justify-center xl:w-60 2xl:w-96">
        <Image className=" lg:w-40 xl:w-[233px] self-center" width={233} height={100} src="/logo.png" />
        </div>
        <div className="hidden ml-14 xl:ml-16 2xl:ml-32 bg-[#FFE24C] h-10 xl:h-14 rounded-[30px] px-6 lg:flex gap-5 items-center">
            <a href="/" className="hover:scale-105 transition-all text-black lg:text-lg xl:text-xl 2xl:text-2xl"> Home </a>
            <a href="/" className="hover:scale-105 transition-all text-black lg:text-lg xl:text-xl 2xl:text-2xl"> About </a>
            <a href="/" className="hover:scale-105 transition-all text-black lg:text-lg xl:text-xl 2xl:text-2xl"> Menu </a>
            <a href="/" className="hover:scale-105 transition-all text-black lg:text-lg xl:text-xl 2xl:text-2xl"> Gallery </a>
            <a href="/" className="hover:scale-105 transition-all text-black lg:text-lg xl:text-xl 2xl:text-2xl text-nowrap"> Contact Us </a>
            
        </div>
        <div className="flex items-center gap-3 2xl:gap-5 lg:ml-10 xl:ml-16 2xl:ml-60">
                <button className="bg-[#6F645E] hover:scale-105 transition-all text-center py-2 tracking-[1.4px] lg:px-5 xl:px-12 2xl:px-16 font font-bold h-14 text-white rounded-[30px] lg:text-lg xl:text-xl 2xl:text-2xl"> Takeaway </button>
                <button className="bg-[#6F645E] hover:scale-105 transition-all text-nowrap text-center py-2 tracking-[1.4px] lg:px-5 xl:px-12 2xl:px-16 font font-bold h-14 text-white rounded-[30px] lg:text-lg xl:text-xl 2xl:text-2xl"> Order Online </button>
        </div>
    </div>
    )

}