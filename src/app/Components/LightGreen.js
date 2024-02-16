"use client"

import { Poppins } from "next/font/google"
import { FiArrowUpRight } from "react-icons/fi";
const pp = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
export default function LightGreen(){
    return(
        <div className="min-h-screen w-full border-red-600 bg-[#cdea68] flex flex-col">
            <div className={`w-full h-[46vh] border-zinc-500 border-b-[1px] ${pp.className} pt-[7%] text-5xl pl-16 pr-32 tracking-tighter`}>
                Ochi is a strategic partner for fast-growing tech businesses that need to <span className="  relative cursor-pointer group "><span className="absolute bottom-3 border-[1px] w-full duration-1000 border-black scale-0 group-hover:scale-100 "></span><span className="absolute bottom-3 border-[1px] w-full border-black scale-100 group-hover:scale-0 "></span>
                raise funds</span> ,
                <span className="  relative cursor-pointer group"><span className="absolute bottom-3 border-[1px] w-full duration-1000 border-black scale-0 group-hover:scale-100 "></span><span className="absolute bottom-3 border-[1px] w-full border-black scale-100 group-hover:scale-0 "></span>sell products</span> ,
                <span className="  relative cursor-pointer group"><span className="absolute bottom-3 border-[1px] w-full duration-1000 border-black scale-0 group-hover:scale-100 "></span><span className="absolute bottom-3 border-[1px] w-full border-black scale-100 group-hover:scale-0 "></span>explain complex ideas</span> <span>,and </span>

                 <span className="  relative cursor-pointer group"><span className="absolute bottom-3 border-[1px] w-full duration-1000 border-black scale-0 group-hover:scale-100 "></span><span className="absolute bottom-3 border-[1px] w-full border-black scale-100 group-hover:scale-0 "></span>hire great people.</span>
            </div>
            <div className="w-full h-[52vh] border-b-[1px] border-zinc-500 px-16 py-6">
                <div className="grid grid-cols-4 grid-rows-1">
                    <div className=" col-span-2">What you can expect:</div>
                    <div className="flex flex-col gap-10 "><div>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people</div>
                    <div>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</div>
                    </div>
                    <div className="flex justify-end items-center flex-col">
                        <div>
                        S:
                        <ul className="mt-5">
                            <li>Instagram</li>
                            <li>Behance</li>
                            <li>Facebook</li>
                            <li>Linkedin</li>
                        </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="w-full h-[70vh]  mt-10 ">
                <div className="grid grid-cols-2 grid-rows-1 px-16 py-6 ">
                    <div className="flex flex-col gap-4 cursor-pointer">
                        <h1 className=" leading-none text-5xl  ">Our approach:</h1>
                        <div className="w-48 h-16 rounded-full flex  bg-zinc-900 group  duration-500 text-white justify-between items-center px-5"><div className="text-md ">READ MORE </div><div className="w-3 h-3 bg-white rounded-full group-hover:w-10 group-hover:h-10 duration-500 flex items-center justify-center"><FiArrowUpRight className="group-hover:block hidden text-xl font-semibold text-black duration-300"/></div></div>
                    </div >
                    <div className=" h-[60vh] bg-[url('/BoyGirlLight.jpg')] bg-no-repeat bg-cover bg-center rounded-xl"></div>
                </div>
            </div>
        </div>
    )
}