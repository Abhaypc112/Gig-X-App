const AdminHandleGigs = () => {
  return (
    <div className=" flex flex-col min-h-screen p-5 space-y-6">
      <div className="top-side flex justify-between mt-[8rem] ml-[20rem] mr-[3rem]">
        <div className="options w-[100%] space-x-5 font-bold">
            <button className="glass px-5 p-3 rounded-md text-xs">ACTIVE</button>
            <button className="glass px-5 p-3 rounded-md text-xs">MOST SALED GIGS</button>
            <button className="glass px-5 p-3 rounded-md text-xs">btn</button>
            <button className="glass px-5 p-3 rounded-md text-xs">btn</button>
        </div>
        <div className="search ">
            <input type="text" placeholder="Search" className="bg-transparent glass border-none focus:outline-none p-2 rounded-md " />
        </div>
      </div>
      <div className="bottum-side  ml-[20rem] mr-[3rem] space-y-5 ">
          <div className="table-heading w-[100%] glass h-14 rounded-md">
             <tr className="w-[100%] flex  items-center h-14 px-5 ">
                <td className="w-[30%] font-bold">GIGS</td>
                <td className="w-[20%] font-bold">TOTAL ORDERS</td>
                <td className="w-[20%] font-bold">TOTAL CANCELATION</td>
                <td className="w-[20%] font-bold">EDIT</td>
                <td className="w-[20%] font-bold">DELETE</td>
             </tr>
          </div>
          <div className="table-data w-[100%] border h-14 rounded-md">
             <tr className="w-[100%] flex items-center h-14 px-5">
                <td className="w-[30%] space-x-3"><input type="checkbox" /><span>Graphic design</span></td>
                <td className="w-[20%]">50</td>
                <td className="w-[20%]">10</td>
                <td className="w-[20%]"><span className="bg-[#7f7f7f] px-3 p-1 rounded-sm">Edit</span></td>
                <td className="w-[20%]"><span className="bg-[#7f7f7f] px-3 p-1 rounded-sm">Delete</span></td>
             </tr>
          </div>
          <div className="table-data w-[100%] border h-14 rounded-md">
             <tr className="w-[100%] flex items-center h-14 px-5">
                <td className="w-[30%] space-x-3"><input type="checkbox" /><span>Graphic design</span></td>
                <td className="w-[20%]">50</td>
                <td className="w-[20%]">10</td>
                <td className="w-[20%]"><span className="bg-[#7f7f7f] px-3 p-1 rounded-sm">Edit</span></td>
                <td className="w-[20%]"><span className="bg-[#7f7f7f] px-3 p-1 rounded-sm">Delete</span></td>
             </tr>
          </div>
        
      </div>
    </div>
  )
}

export default AdminHandleGigs
