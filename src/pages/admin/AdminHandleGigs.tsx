import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { adminBlockGig, adminGetAllGigs } from "../../redux/slices/admin/manageGigsSlice";
import { IGig } from "../../interface/gigInterface";

const AdminHandleGigs = () => {
  const dispatch = useAppDispatch();
  const { gigs } = useAppSelector((state) => state.admin.adminGigManagement);
  const [filter, setFilter] = useState<boolean | null>(null); 
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState <IGig[]> (gigs); 

  useEffect(() => {
    let result = gigs;

    if (filter !== null) {
      result = result.filter((item) => item.isActive === filter);
    }
 
    if (searchTerm.trim() !== "") {
      result = result.filter((item) =>
        item.gigName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredData(result);
  }, [gigs, filter, searchTerm]);


  useEffect(() => {
    dispatch(adminGetAllGigs());
  }, [dispatch]);

   const handleGig = async (gigId : string) => {
     if(gigId) await dispatch(adminBlockGig({gigId}));
   }
  return (
    <div className=" flex flex-col min-h-screen p-5 space-y-6">
      <div className="top-side flex justify-between mt-[8rem] lg:ml-[20rem] lg:mr-[3rem]">
        <div className="options w-[100%] space-x-5 font-bold">
            <button onClick={()=>setFilter(null)} className={filter === null ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>ALL</button>
            <button onClick={()=>setFilter(true)} className={filter === true ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>ACTIVE</button>
            <button onClick={()=>setFilter(false)} className={filter === false ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>INACTIVE</button>
            <button className="glass-btn px-5 p-3 rounded-md text-xs">BTN</button>
        </div>
        <div className="search ">
            <input onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search" className="bg-transparent glass border-none focus:outline-none p-2 rounded-md " />
        </div>
      </div>
      <div className="bottum-side  lg:ml-[20rem] lg:mr-[3rem] space-y-5 ">
          <div className="table-heading w-[100%] glass h-14 rounded-md">
             <tr className="w-[100%] flex  items-center h-14 px-5 text-center">
                <td className="w-[30%] font-bold">GIGS</td>
                <td className="w-[20%] font-bold">GIG OWNER</td>
                <td className="w-[20%] font-bold">STATUS</td>
                <td className="w-[20%] font-bold">BLOCK</td>
                <td className="w-[20%] font-bold">VIEW</td>
             </tr>
          </div>
          {
            filteredData && filteredData.map((gig) => {
               return(
                  <div className="table-data w-[100%] border border-gray-400 h-20 lg:h-14 rounded-md flex items-center">
                     <tr className="w-[100%] flex items-center h-14 px-5 ">
                        <td className="w-[30%] space-x-3"><input type="checkbox"/><span >{gig.gigName}</span></td>
                        <td className="w-[20%] text-center">{gig.gigOwner.name}</td>
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
