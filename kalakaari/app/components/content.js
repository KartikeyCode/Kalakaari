import Image from "next/image"

export default function Content(){
    return(
        <div className="flex flex-col">
            <div className="flex flex-col gap-2 xl:gap-4 2xl:gap-7">
            <div className="flex gap-2 xl:gap-4 items-center">
                <Image src="/mail.png" width={24} height={24} />
                <h1 className="lg:text-sm xl:text-lg text-black font-normal"> info@kalakaarikitchen.com </h1>
            </div>
            <div className="flex gap-2 xl:gap-4 items-center">
                <Image src="/phone.png" width={24} height={24} />
                <h1 className="lg:text-base xl:text-lg text-black font-normal"> +91 99900 70307 </h1>
            </div>
            <div className="flex gap-2 xl:gap-4 items-start">
                <Image className=" lg:mt-1 2xl:mt-[7px]" src="/location.png" width={24} height={24} />
                <h1 className="lg:text-sm lg:w-40 xl:text-base xl:w-52 2xl:w-64 text-black font-normal"> 2nd Floor, Vijaya Complex, Vakil Market, Chanderlok, DLF City IV, Sector 28, Gurugram, Haryana 122002 </h1>
            </div>
            </div>
            <div className="  lg:gap-2 2xl:gap-5 flex flex-col lg:mt-2 xl:mt-[2rem] 2xl:mt-[6rem]">
                <h1 className=" lg:text-lg xl:text-2xl 2xl:text-4xl text-black font-bold"> Welcome to Kalakaari </h1>
                <h1 className=" lg:text-sm xl:text-base 2xl:text-xl lg:w-[12rem] xl:w-[15rem] 2xl:w-[20rem]"> Kalakaari is an experimental and conceptual Indian-fusion cloud kitchen brand. The three key focus areas are ingredients, taste, and cultural fusion where it draws inspiration from the myriad flavours of India and adds global twists tothem. We promise an unmatched gastronomical experience right at people’s homes </h1>
            </div>
            <button className=" hover:scale-105 transition-all mt-[1rem] xl:mt-[4rem] 2xl:mt-8 text-center lg:w-44 xl:w-auto px-1 py-1 xl:py-3 xl:px-3 2xl:py-4 2xl:px-4 rounded-[30px] text-white font-medium font-Dongle bg-[#FF3030] lg:text-2xl xl:text-4xl 2xl:text-5xl"> Catering Services </button>
           
        </div>
    )
}