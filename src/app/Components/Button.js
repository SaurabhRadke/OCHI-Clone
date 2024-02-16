

const Button = ({value}) => {
  return (
    <>
        <div className="relative   border-[1px] border-zinc-800 rounded-full py-1 px-2 hover:bg-black hover:text-white duration-700 overflow-hidden">
            <div className="text-sm uppercase  font-medium  z-[10] grid place-items-center"><span>{value}</span></div>
            <div className="absolute w-full h-0  bottom-0 left-0  bg-black duration-500 group-hover:h-full text-sm text-white grid place-items-center uppercase"><span>Helllo</span></div>
        </div>
    </>
  )
}

export default Button