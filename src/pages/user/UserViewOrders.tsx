
const UserViewOrders = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className=" flex flex-col min-h-screen p-5 space-y-6 w-[90%]">
      <div className="top-side flex justify-between mt-[9rem]">
        <div className="options w-[100%] space-x-5 font-bold ">
            <button className="glass px-5 p-3 rounded-md text-xs">ORDERS</button>
            <button className="glass px-5 p-3 rounded-md text-xs">COMPLETED</button>
            <button className="glass px-5 p-3 rounded-md text-xs">STARTED</button>
            <button className="glass px-5 p-3 rounded-md text-xs">BTN</button>
        </div>
        <div className="search ">
            <input type="text" placeholder="Search" className="bg-transparent glass border-none focus:outline-none p-2 rounded-md " />
        </div>
      </div>
      <div className="bottum-side space-y-5 ">
          <div className="table-heading w-[100%] glass h-14 rounded-md">
             <tr className="w-[100%] flex  items-center h-14 px-5 ">
                <td className="w-[30%] font-bold">BUYER</td>
                <td className="w-[20%] font-bold">GIG</td>
                <td className="w-[20%] font-bold">DATE</td>
                <td className="w-[20%] font-bold">TOTAL</td>
                <td className="w-[20%] font-bold">STATUS</td>
             </tr>
          </div>
          <div className="table-data w-[100%] border h-14 rounded-md">
             <tr className="w-[100%] flex items-center h-14 px-5">
                <td className="w-[30%] space-x-3"><input type="checkbox" /><span>Vishnu</span></td>
                <td className="w-[20%]">Graphic design</td>
                <td className="w-[20%]">10-10-2025</td>
                <td className="w-[20%]">₹ 3600</td>
                <td className="w-[20%]"><span className="bg-yellow-500 px-3 p-1 rounded-sm "> Active </span></td>
             </tr>
          </div>
          <div className="table-data w-[100%] border h-14 rounded-md">
             <tr className="w-[100%] flex items-center h-14 px-5">
                <td className="w-[30%] space-x-3"><input type="checkbox" /><span>Abhay</span></td>
                <td className="w-[20%]">Graphic design</td>
                <td className="w-[20%]">10-12-2024</td>
                <td className="w-[20%]">₹ 15000</td>
                <td className="w-[20%]"><span className="bg-[#13a14c] px-3 p-1 rounded-sm">Completed</span></td>
             </tr>
          </div>
      </div>
    </div>
    </div>
  )
}

export default UserViewOrders
