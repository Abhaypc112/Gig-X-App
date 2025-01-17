import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { adminBlockGig, adminGetAllGigs } from "../../redux/slices/admin/manageGigsSlice";

const AdminHandleGigs = () => {
   const dispatch = useAppDispatch();
   const {gigs} = useAppSelector((state) => state.admin.adminGigManagement);
   const [filter, setFilter] = useState<boolean | null>(null);

   const filteredData = gigs.filter((item) => {
     if (filter === null) return true;
     return item.isActive === filter;
   });

   useEffect(() => {
      dispatch(adminGetAllGigs());
   },[dispatch])

   const handleGig = async (gigId : string) => {
     if(gigId) await dispatch(adminBlockGig({gigId}));
   }
  return (
    <div className=" flex flex-col min-h-screen p-5 space-y-6">
      <div className="top-side flex justify-between mt-[8rem] ml-[20rem] mr-[3rem]">
        <div className="options w-[100%] space-x-5 font-bold">
            <button onClick={()=>setFilter(null)} className="glass px-5 p-3 rounded-md text-xs">ALL</button>
            <button onClick={()=>setFilter(true)} className="glass px-5 p-3 rounded-md text-xs">ACTIVE</button>
            <button onClick={()=>setFilter(false)} className="glass px-5 p-3 rounded-md text-xs">INACTIVE</button>
            <button className="glass px-5 p-3 rounded-md text-xs">BTN</button>
        </div>
        <div className="search ">
            <input type="text" placeholder="Search" className="bg-transparent glass border-none focus:outline-none p-2 rounded-md " />
        </div>
      </div>
      <div className="bottum-side  ml-[20rem] mr-[3rem] space-y-5 ">
          <div className="table-heading w-[100%] glass h-14 rounded-md">
             <tr className="w-[100%] flex  items-center h-14 px-5 text-center">
                <td className="w-[30%] font-bold">GIGS</td>
                <td className="w-[20%] font-bold">TOTAL ORDERS</td>
                <td className="w-[20%] font-bold">STATUS</td>
                <td className="w-[20%] font-bold">BLOCK</td>
                <td className="w-[20%] font-bold">VIEW</td>
             </tr>
          </div>
          {
            filteredData && filteredData.map((gig) => {
               return(
                  <div className="table-data w-[100%] border h-14 rounded-md">
                     <tr className="w-[100%] flex items-center h-14 px-5 ">
                        <td className="w-[30%] space-x-3"><input type="checkbox"/><span >{gig.gigName}</span></td>
                        <td className="w-[20%] text-center">20</td>
                        <td className="w-[20%] text-center"><button className=" w-[5rem] p-1 rounded-sm"> {gig.isActive?"Active":"Inactive"} </button></td>
                        <td className="w-[20%] text-center"><button onClick={()=>handleGig(gig._id)} className="glass w-[5rem] p-1 rounded-sm">{gig.isBlock ? "Unblock" : "Block"}</button></td>
                        <td className="w-[20%] text-center"><button className="glass w-[5rem] p-1 rounded-sm "> View </button></td>
                     </tr>
               </div>
               )
            })
          }
        
      </div>
    </div>
  )
}

export default AdminHandleGigs
