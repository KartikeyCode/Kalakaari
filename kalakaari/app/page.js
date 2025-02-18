import Image from "next/image";
import Navbar from "./components/navbar";
import Mobile from "./components/mobile";
import Content from "./components/content";
export default function Home() {
  return (
    <>
    <div className="hidden lg:flex min-h-screen flex-col lg:bg-[#FFF] ">
      <Image className="hidden lg:flex absolute z-0 lg:top-5 lg:w-[49rem] lg:h-[35rem] lg:left-56 xl:top-5 xl:w-[61rem] xl:h-[47rem]  xl:left-[18rem] 2xl:top-10 2xl:w-[85rem] 2xl:h-[875px] 2xl:left-[31rem]  " src="/Rectangle 1.png" width={1460} height={1002}/>
      <div className="z-10 relative">
      <Navbar/>
      </div>
      <div className="hidden lg:flex flex-col py-28 lg:px-6 lg:py-28 xl:py-36 xl:px-6 2xl:py-44 2xl:px-20 inset-y-0 left-0 absolute">
      <Content/>
      </div>
      <div className="links hidden  lg:flex gap-1 2xl:gap-2 absolute lg:bottom-7 lg:right-6 xl:right-7 xl:bottom-9 2xl:right-16 2xl:bottom-12">
                <a target="_blank" href="https://www.instagram.com/kalakaari.official"> <Image src="/insta.png" className="lg:w-5 xl:w-6 2xl:w-[34.55px]" width={34.55} height={34.55} /> </a>
                <a target="_blank" href="https://www.facebook.com/people/Kalakaariofficial/100076426309784/"> <Image src="/facebook.png" className="lg:w-5 xl:w-6 2xl:w-[34.55px]" width={34.55} height={34.55} /> </a>
      </div>
    </div>
    <div className="lg:hidden flex min-h-screen flex-col bg-[url('/phonebg.png')]">
      <Navbar/>
      <Mobile/>
    </div>
    </>
  );
}
