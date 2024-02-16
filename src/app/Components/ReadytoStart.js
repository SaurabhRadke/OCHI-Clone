"use client"
import { Teko } from "next/font/google"
// import EyeSection from "./Eyesection"
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useState } from "react"
const teko = Teko({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
})
export default function ReadyStart() {
    const [rotate, setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouse_x = e.clientX;
            let mouse_y = e.clientY;

            let delX = mouse_x - window.innerWidth / 2
            let delY = mouse_y - window.innerHeight / 2

            var loc = Math.atan2(delY, delX) * (180 / Math.PI)
            setRotate(loc - 180)
        })
    })

    return (
        <>
            <div data-scroll data-scroll-speed='-.1' className="bg-[#cdea68] -z-50">
                <div className="relative w-full h-screen  grid place-items-center px-10">
                    <h1 className={`uppercase text-[13rem] font-bold text-center leading-[11rem] ${teko.className}`}>Ready<br />to start project?</h1>
                    <div className="absolute left-0 top-0 w-full h-full grid place-items-center">
                        <div className="  gap-5 flex mt-[10vw] ">
                            <div className="w-[16vw] h-[16vw] rounded-full bg-white grid place-items-center">
                                <div className="relative w-[60%] h-[60%] bg-black rounded-full grid place-items-center">
                                    <h1 className="text-white tracking-widest ">PLAY</h1>
                                    <div style={{ transform: `rotate(${rotate}deg)` }} className={`absolute w-full h-4 rotate-${rotate}`} >  {/*rotate plate */}
                                        <div className="h-4 w-4 rounded-full bg-white"></div>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-[16vw] h-[16vw]  rounded-full bg-white grid place-items-center">
                                <div className="relative w-[60%] h-[60%] bg-black rounded-full grid place-items-center">
                                    <h1 className="text-white tracking-widest ">PLAY</h1>
                                    <div style={{ transform: `rotate(${rotate}deg)` }} className=" absolute w-full h-4  ">  {/*rotate plate */}
                                        <div className="h-4 w-4 rounded-full bg-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-60 grid place-items-center gap-5 ">
                    <div className="h-14  w-[17rem] rounded-full flex  bg-zinc-900 group  duration-500 text-white justify-between items-center px-5"><div className="text-md pl-4   ">START THE PROJECT</div><div className="w-3 h-3 bg-white rounded-full group-hover:w-10 group-hover:h-10 duration-500 flex items-center  justify-center"><FiArrowUpRight className="group-hover:block hidden text-xl font-semibold text-black duration-300" /></div></div>

                    <div className="h-14 w-[17rem] rounded-full flex border-[1px] border-zinc-600 group  duration-500 hover:bg-black hover:text-white  justify-between items-center px-5"><div className="text-md pl-4   ">HELLO@OCHI.DESIGN</div><div className="w-3 h-3 bg-white rounded-full group-hover:w-10 group-hover:h-10 duration-500 flex items-center  justify-center"><FiArrowUpRight className="group-hover:block hidden text-xl font-semibold text-black duration-300" /></div></div>
                </div>
            </div>
        </>
    )
}