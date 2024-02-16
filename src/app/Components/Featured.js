"use client"
import { Oswald } from "next/font/google"
import FeaturedCard from "./FeatureCard"
import { FiArrowUpRight } from "react-icons/fi";
const Ferc = Oswald({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

export default function Featured(){
    return(
        <div className={`min-h-screen w-full bg-zinc-100  pt-[5vw] `}>
            <div className="w-full  border-b-[1px] border-zinc-400 px-[3vw] py-[2vw]">
                <h1 className="text-[8vh] tracking-tight leading-none">Featured projects</h1>
            </div>
            <div className="w-full   mt-10 px-10 py-4 flex flex-wrap gap-6">
                <FeaturedCard buut={["AUDIT","COPYWRITING","SALES DECK","SLIDES DESIGN"]} tt={false} name={"FYDE"}/>
                <FeaturedCard buut={["AGENCY","COMPANY PRESENTATION"]} tt={true} name={"VISE"}/>
                <FeaturedCard buut={["BRAND IDENTITY","DESIGN RESEARCH","INVENTORY DECK"]} tt={false} name={"TRAWA"}/>
                <FeaturedCard buut={["BRANDED TEMPLATE"]} tt={true} name={"PREMIUM BLEND"} txt={true}/>
            </div>
            <div className="w-full pt-10 grid place-items-center">
            <div className="h-14  w-72 rounded-full flex  bg-zinc-900 group  duration-500 text-white justify-between items-center px-5"><div className="text-md ">VIEW ALL CASE STUDIES</div><div className="w-3 h-3 bg-white rounded-full group-hover:w-10 group-hover:h-10 duration-500 flex items-center justify-center"><FiArrowUpRight className="group-hover:block hidden text-xl font-semibold text-black duration-300"/></div></div>
            </div>
            
        </div>
    )
}