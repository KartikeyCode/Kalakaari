import Image from "next/image"

export default function Specials()
{
    return(
        <div className="grid grid-cols-3 py-4 gap-8">
                <div className="flex flex-col items-center gap-2"> 
                    <Image src="/specials/fish.png" width={100} height={100} />
                    <h1 className=" text-white text-md w-24 text-center "> Chimichurri Fish Tikka </h1>
                </div>
                <div className="flex flex-col items-center gap-2"> 
                    <Image src="/specials/pizza.png" width={100} height={100} />
                    <h1 className=" text-white text-md w-24 text-center "> Paneer Tikka Pizza </h1>
                </div>
                <div className="flex flex-col items-center gap-2"> 
                    <Image src="/specials/mutton.png" width={100} height={100} />
                    <h1 className=" text-white text-md w-24 text-center "> Mutton Rogan Josh </h1>
                </div>
                <div className="flex flex-col items-center gap-2"> 
                    <Image src="/specials/soya.png" width={100} height={100} />
                    <h1 className=" text-white text-md w-24 text-center "> Soya Chaap Masala </h1>
                </div>
                <div className="flex flex-col items-center gap-2"> 
                    <Image src="/specials/jalebi.png" width={100} height={100} />
                    <h1 className=" text-white text-md w-20 text-center "> Jalebi Churros </h1>
                </div>
                <div className="flex flex-col items-center gap-2"> 
                    <Image src="/specials/spaghetti.png" width={100} height={100} />
                    <h1 className=" text-white text-md w-24 text-center "> Tadka Spaghetti </h1>
                </div>
        </div>
    )
}