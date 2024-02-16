"use client"
import { Teko } from "next/font/google"

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})
export default function EyeOpening() {
    return (
        <div className="w-full h-screen grid grid-cols-2 grid-rows-1 py-20 px-10 bg-zinc-100 z-20 ">
            <div className={`${teko.className} font-bold text-[8rem] leading-[6rem] tracking-tighter`}>EYE- <br />OPENING</div>
            <div className="flex flex-col">
                <div className={`${teko.className} font-bold text-[8rem] leading-[6rem] tracking-tighter`}>PRESENTATION</div>
                <div className="grid grid-cols-2 grid-rows-1  h-full ">
                    <div className="flex flex-col ">
                        <div className="flex flex-col gap-4 py-6 px-2">
                            <h2>S:</h2>
                            <ul>
                                <li className=" cursor-pointer">Instagram</li>
                                <li className=" cursor-pointer">Behance</li>
                                <li className=" cursor-pointer">Facebook</li>
                                <li className=" cursor-pointer">Linkedin</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 py-6 px-2">
                            <h2>L:</h2>
                            <ul>
                                <li className=" cursor-pointer">202-1965 W 4th Ave</li>
                                <li className=" cursor-pointer">Vancouver, Canada</li>
                                <li className=" cursor-pointer">30 Chukarina St</li>
                                <li className=" cursor-pointer">Lviv, Ukraine</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3 py-6 px-2">
                            <h2>E:</h2>
                            <ul>
                                <li className=" cursor-pointer">hello@ochi.design</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-end items-center">
                    <div className="flex flex-col gap-4 py-6 px-2">
                            <h2>M:</h2>
                            <ul>
                                <li className=" cursor-pointer">Home</li>
                                <li className=" cursor-pointer">Services</li>
                                <li className=" cursor-pointer">About us</li>
                                <li className=" cursor-pointer">Our work</li>
                                <li className=" cursor-pointer">Insights</li>
                                <li className=" cursor-pointer">Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}