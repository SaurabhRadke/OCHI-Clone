"use client"
import { motion } from "framer-motion"
import { Oswald } from "next/font/google"
const rc = Oswald({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})
export default function GreenSection(){
    
    return(
        <>
            <div className={`relative w-full  pt-20 pb-10 rounded-xl bg-[#004D43] flex justify-center items-center ${rc.className} overflow-hidden`}>
                <div className="  flex border-t-2 border-b-2 border-zinc-600 whitespace-nowrap text-white leading-none">
                    {/* <h1 className="text-[18vw] tracking-tighter leading-none">WE ARE OCHI</h1>
                    <h1 className="text-[18vw] tracking-tighter leading-none">WE ARE OCHI</h1> */}

                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ repeat:Infinity , ease:"linear" , duration:5}} className="text-[18vw] tracking-tighter pr-20 ">WE ARE OCHI</motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ repeat:Infinity , ease:"linear" ,duration:5}} className="text-[18vw] tracking-tighter pr-20 ">WE ARE OCHI</motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity , ease:"linear" ,duration:5}} className="text-[18vw] tracking-tighter pr-20">WE ARE OCHI </motion.h1>
                </div>
            </div>
        </>
    )
}