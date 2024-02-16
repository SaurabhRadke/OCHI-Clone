"use client"
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
export default function CardSection(){
    return(
        <>  
        <div className=" h-screen w-full bg-zinc-100 px-12 py-14 ">
            <div className="  h-[75%] w-full grid grid-cols-4 grid-rows-1 gap-4 p-3">
                <div className="relative col-span-2  rounded-xl bg-[#004D43] text-[#cdea68] flex justify-center items-center">
                    <h1 className="text-6xl tracking-wide font-bold ">Ochi</h1>
                    <button className="absolute bottom-8 left-5 px-4 py-1 border-[1px] border-[#cdea68] rounded-full text-[#cdea68] text-sm flex items-center"><FaRegCopyright />2019-2022</button>
                </div>
                <div className="relative rounded-xl bg-[#212121] flex justify-center items-center gap-1 flex-col p-3">
                    <h1 className="text-5xl text-white font-bold">Clutch</h1>
                    <div className="flex gap-1 text-[#cdea68]"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
                    <button className="absolute bottom-8 left-5 px-4 py-1 border-[1px] border-white rounded-full text-white text-sm">RATING 5.0 CLUTCH</button>
                </div>
                <div className="relative rounded-xl bg-[#212121] flex flex-col justify-center items-center p-3" >
                    <Image src="/logo003.png" alt="missing" width={100} height={100}/>
                    <button className="absolute bottom-8 left-5 px-4 py-1 border-[1px] border-white rounded-full text-white text-sm">BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>
        </div>
        </>
    )
}