
const FreelancerHandleGigs = () => {
  return (
    <div className="w-[100%] flex justify-center">
        <div className=" flex flex-col min-h-screen p-5 space-y-6 mt-[9rem] w-[90%]">
      <div className="top-side flex justify-between ">
        <div className="options w-[100%] space-x-5 font-bold">
            <button className="glass px-5 p-3 rounded-md text-xs">ACTIVE</button>
            <button className="glass px-5 p-3 rounded-md text-xs">MOST SALED GIGS</button>
            <button className="glass px-5 p-3 rounded-md text-xs">btn</button>
            <button className="glass px-5 p-3 rounded-md text-xs">btn</button>
        </div>
        <div className="search flex w-[30%] justify-between">
        <button className="glass px-5 p-3 rounded-md text-xs text-yellow-500 font-bold">Add Gig</button>
            <input type="text" placeholder="Search" className="bg-transparent glass border-none focus:outline-none p-2 rounded-md " />
        </div>
      </div>
      <div className="bottum-side space-y-5 w-[100%] ">
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
    </div>
  )
}

export default FreelancerHandleGigs
