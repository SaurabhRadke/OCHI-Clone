"use client"
import { useEffect,useState } from "react"

export default function EyeSection(){
    const [rotate,setRotate]=useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouse_x=e.clientX;
            let mouse_y=e.clientY;

            let delX=mouse_x - window.innerWidth/2
            let delY=mouse_y - window.innerHeight/2

            var loc=Math.atan2(delY,delX)*(180/Math.PI)
            setRotate(loc-180)
        })
    })
    return(

        <div className="w-full min-h-screen overflow-hidden ">
            <div data-scroll data-scroll-speed="-.6"  className="absolute h-full w-full bg-[url('/EyeImage.jpg')] bg-no-repeat bg-center bg-cover flex justify-center items-start -z-40">
                <div className="  gap-5 flex mt-[10vw] ">
                    <div className="w-[16vw] h-[16vw] rounded-full bg-white grid place-items-center">
                        <div className="relative w-[60%] h-[60%] bg-black rounded-full grid place-items-center">
                            <h1 className="text-white tracking-widest ">PLAY</h1>
                            <div style={{transform:`rotate(${rotate}deg)`}} className= {`absolute w-full h-4 rotate-${rotate}`} >  {/*rotate plate */}
                                <div className="h-4 w-4 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[16vw] h-[16vw] border-2 border-black rounded-full bg-white grid place-items-center">
                        <div className="relative w-[60%] h-[60%] bg-black rounded-full grid place-items-center">
                            <h1 className="text-white tracking-widest ">PLAY</h1>
                            <div style={{transform:`rotate(${rotate}deg)`}} className=" absolute w-full h-4  ">  {/*rotate plate */}
                                <div className="h-4 w-4 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}