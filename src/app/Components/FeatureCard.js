"use client"
import { Oswald } from "next/font/google"
import Button from "./Button"
const Ferc = Oswald({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

export default function FeaturedCard({ buut ,tt,name,txt}) {
    return (
        <div className="flex flex-col gap-2 justify-center">
            <div className=" rounded-xl w-[45vw] h-[75vh] flex flex-col gap-2 group ">
                <div className="flex gap-3 items-center py-2"><div className="h-3 w-3 bg-black rounded-full"></div><h2>{name}</h2></div>
                <div className={`w-full h-full  relative group-hover:scale-95 group-hover:z-20 duration-1000 rounded-xl  bg-[url('/Feature2.jpg')] bg-cover bg-no-repeat bg-center`}>
                    <div className={`absolute top-1/2 ${tt?"left-[-5rem] ":"right-[-5rem] "} ${txt & "left-[-10rem]"} z-10  -translate-y-[50%]  text-center overflow-hidden group-hover:scale-100`} >
                        <h1 className={`${Ferc.className} text-7xl text-[#b8e221] translate-y-16 duration-700 group-hover:translate-y-0`}>{name} </h1>
                    </div>
                </div>
            </div>
            <div className="flex gap-2">{buut.map((text,ind)=>{
                return(<Button value={text} key={ind}/>)
            })}</div>
        </div>

    )
}