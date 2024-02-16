
import { ClientButton } from "./ClientButton"
const EachService = ({ ser }) => {
    return (
        <>
            <div className="flex items-center  group cursor-pointer" >
                <button className="px-4 py-2 border-[1px] rounded-full border-black text-sm">{ser}</button>
                <div className=" overflow-hidden scale-0 duration-700 group-hover:scale-100">
                    <ClientButton className="hidden" />
                </div>

            </div>
        </>
    )
}

export default EachService