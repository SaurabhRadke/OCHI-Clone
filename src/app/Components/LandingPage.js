"use client"

import { motion } from "framer-motion";
import { Raleway } from "next/font/google"
import { Oswald } from "next/font/google"
import { FiArrowUpRight } from "react-icons/fi";

const rc = Oswald({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})
const rail =  Raleway({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})

export default function LandingPage({blurr}) {
    
    return (
        <>
            <div data-scroll data-scroll-speed='-.9' className="absolute  top-0 left-0 w-full h-full pt-16 px-14 z-[-1] bg-zinc-100 ">
                <div id="TextStruct" className={`${rc.className}  mt-20 text-black flex flex-col sm:text-[7vw] text-[10vw]`}>
                    <div className="Masker ">
                        <h1 className=" tracking-tight leading-none"> WE CREATE</h1>
                    </div>
                    <div className="Masker flex items-center gap-2">
                        {!blurr && <motion.div initial={{width:0}} animate={{width:"9.5vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1.5}} className=" w-32 h-20 mt-2 rounded-md overflow-hidden bg-[url('/ochiip1.png')] bg-cover bg-center bg-no-repeat"></motion.div>}
                        <h1 className=" tracking-tight leading-none"> EYE-OPENING</h1>
                    </div>
                    <div className="Masker flex ">
                        <h1 className=" tracking-tight leading-none"> PRESENTATIONS</h1>
                    </div>
                </div>
                <div className={`w-full h-44  mt-12  pt-6 md:text-md text-black font-medium ${rail.className} `} >
                    <div className="h-0 border-[1px] border-zinc-400"></div>
                    <div className="flex justify-between mt-6">
                        <div className="left ">For public and private companies</div>
                        <div className="mid tracking-wide">
                            From the first pitch to IPO</div>
                        <div className="right flex gap-3 group ">
                            <button className=" h-10 px-4 rounded-full border-2 border-zinc-600 group-hover:bg-zinc-100 group-hover:text-black group-hover:font-semibold ">START THE PROJECT</button>
                            <div className="w-11 h-11 border-2 flex justify-center items-center rounded-full text-3xl group-hover:bg-zinc-100 group-hover:text-black duration-500"><span></span><FiArrowUpRight /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}