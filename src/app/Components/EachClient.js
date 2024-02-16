"use client"

import { ClientButton } from "./ClientButton"
import EachService from "./EachService"


const EachClient = ({active,setActive,clickedVal,each}) => {

  return (
    <>
        <div className={` pl-10  py-3 border-t-[1px] ${active===clickedVal ? "h-[32vw]":"h-12"} border-zinc-500 mx-2 w-[98%] border-b-[1px] grid grid-cols-5 grid-rows-1 overflow-hidden duration-700`}>
                <h2 className=""> {each.name}</h2>
                <div className="flex flex-col items-center duration-500" >
                    {active ===clickedVal && <div className="flex flex-col gap-16" ><div>Services</div>
                    <div className="flex flex-col gap-3">
                    {each.Services.map((ser,indd)=>{
                        return(<EachService ser={ser} key={indd}/>)
                    })}
                    
                    {/* <div className="flex items-center  group cursor-pointer" >
                        <button className="px-4 py-2 border-[1px] rounded-full border-black text-sm">SALES DECK</button>
                        <div className=" overflow-hidden scale-0 duration-700 group-hover:scale-100">
                            <ClientButton className="hidden"/>
                        </div>
                        
                    </div> */}
                    </div>
                    
                    
                    </div>}
                </div>
                <div className=" col-span-2 pl-24 flex flex-col gap-10"><div>{each.name2}</div>
                    <div className="flex flex-col gap-3">
                        <div className=" w-24 h-24 bg-green-400 rounded-lg"></div>
                        <p>{each.data}</p>
                    </div>
                
                </div>
                <h2 className=" text-right pr-4 cursor-pointer" onClick={()=>{if(active===clickedVal){setActive(100)}else{setActive(clickedVal);console.log(active)}}}>READ</h2>
        </div>
    </>
  )
}

export default EachClient