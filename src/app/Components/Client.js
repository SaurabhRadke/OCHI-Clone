"use client"

import EachClient from "./EachClient"
import { useState } from "react"

const Client = () => {
    const [active,setActive]=useState(0)
    const arrr=[
        {id:"0",name:"Karman Ventures",Services:["INVESTOR DECK","SALES DECK"],name2:"William Barnes",data:"They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5"},
        {id:"1",name:"Planetly",Services:["AGENCY","BIG NEWS DECK","BRANDED TEMPLATE","INVESTOR DECK","PRODUCT PRESENTATION","SALES DECK"],name2:"Nina Walloch",data:"Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership."},
        {id:"2",name:"Workiz Easy",Services:["COMPANY PRESENTATION","ON BOARDING PRESENTATION","REDESIGN","SALES DECK"],name2:"Tomer Levy",data:"OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients."},

        {id:"3",name:"Premium Blend",Services:["BRANDED TEMPLATE","ILLUSTRATION"],name2:"Ellen Kim",data:"They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations."},

        {id:"4",name:"Hypercare Systems",Services:["INVESTOR DECK","STARTUP PITCH"],name2:"Brendan Goss",data:"The service received from OCHI was absolutely first-class. Their close attention to detail, and deep thought in terms of narrative, flow, and aesthetics, completely exceeded my expectations, which were very high from the outset. Especially loved and appreciated the creation of visuals, animation, and advice around the look and feel that we are after. We will definitely continue working with Ihor and his team. I cannot recommend them highly enough."},

        {id:"5",name:"Officevibe",Services:["BRANDED TEMPLATE"],name2:"Raff Labrie",data:"Ochi has an impressive understanding of what’s needed to do an effective presentation. The stakeholders at work said it’s the best most complete PP template they’ve ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!"},

        {id:"6",name:"Orderlion",Services:["AGENCY","INVESTOR DECK","PRODUCT PRESENTATION","REVIEW","SALES DICK"],name2:"Stefan Strohmer",data:"The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!"},

        {id:"7",name:"Black Book",Services:["REVIEW","STARTUP PICH"],name2:"Jaci Smith",data:"They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We’re very happy with the process and the final product. All was handled well and professionally."},
        {id:"8",name:"Trawa Energy",Services:["BRANDING","INVESTOR DICK","STARTUP PICH"],name2:"David Budde",data:"We were surprised by the accuracy with which Ochi Design nailed the overall design language that perfectly aligned with our personal preferences and the vision that we have for our young company."},
    ]
  return (
    <>
        <div className="min-h-screen w-full  py-4 bg-zinc-100 ">
            <h1 className="text-5xl ml-8 mb-8">Clients' reviews</h1>
            {arrr.map((each,ind)=>{
                return(<EachClient key={ind} active={active} setActive={setActive} clickedVal={ind} each={each}/>)
            })}
        </div>
    </>
  )
}

export default Client