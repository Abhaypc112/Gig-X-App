import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { freelancerDeleteGig, freelancerGetAllGigs, freelancerUpdateGigStataus } from "../../redux/slices/freelancer/gigHandleSlice";
import { useNavigate } from "react-router-dom";
import { IGig } from "../../interface/gigInterface";

const FreelancerHandleGigs = () => {
   const dispatch = useAppDispatch();
   const {gigs} = useAppSelector((state) => state.freelancer.freelancerGigManagement);
   const naviagte = useNavigate();
   const [filter, setFilter] = useState<boolean | null>(null); 
   const [searchTerm, setSearchTerm] = useState("");
   const [filteredData, setFilteredData] = useState <IGig[]> (gigs);

   useEffect(()=>{
      dispatch(freelancerGetAllGigs())
   },[dispatch])

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

   const handleGigStatus = async(gigId : string) => {
      await dispatch(freelancerUpdateGigStataus({gigId}))
   }
   const handleDeleteGig = async(gigId : string) => {
      await dispatch(freelancerDeleteGig({gigId}))
   }

  return (
    <div className="w-[100%] flex justify-center">
        <div className=" flex flex-col min-h-screen p-5 space-y-6 mt-[9rem] w-[90%]">
      <div className="top-side flex justify-between ">
        <div className="options w-[100%] space-x-5 font-bold">
        <button onClick={()=>setFilter(null)} className={filter === null ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>ALL</button>
            <button onClick={()=>setFilter(true)} className={filter === true ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>ACTIVE</button>
            <button onClick={()=>setFilter(false)} className={filter === false ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>INACTIVE</button>
            <button className="glass-btn px-5 p-3 rounded-md text-xs">BTN</button>
        </div>
        <div className="search flex w-[30%] justify-between">
        <button onClick={()=>naviagte('/freelancer/create-gig')} className="glass px-5 p-3 rounded-md text-xs text-yellow-500 font-bold">Add Gig</button>
            <input onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search" className="bg-transparent glass border-none focus:outline-none p-2 rounded-md " />
        </div>
      </div>
      <div className="bottum-side space-y-5 w-[100%] ">
          <div className="table-heading w-[100%] glass h-14 rounded-md">
             <tr className="w-[100%] flex  items-center text-center h-14 px-5 ">
                <td className="w-[30%] font-bold">GIGS</td>
                <td className="w-[20%] font-bold">TOTAL ORDERS</td>
                <td className="w-[20%] font-bold">STATUS</td>
                <td className="w-[20%] font-bold">BLOCK</td>
                <td className="w-[20%] font-bold">EDIT</td>
                <td className="w-[20%] font-bold">DELETE</td>
                <td className="w-[20%] font-bold">VIEW</td>
             </tr>
          </div>
          {
            filteredData && filteredData.map((gig) => {
               return(
               <div className="table-data w-[100%] border h-14 border-gray-400 rounded-md">
                  <tr className="w-[100%] flex items-center h-14 px-5">
                     <td className="w-[30%] space-x-3"><input type="checkbox" /><span>{gig.gigName}</span></td>
                     <td className="w-[20%] text-center">50</td>
                     <td className="w-[20%] text-center"><button onClick={()=>handleGigStatus(gig._id)} className={gig.isActive?"bg-[#13A14C] w-[5rem] p-1 rounded-sm":"bg-[#7f7f7f] w-[5rem] p-1 rounded-sm"}> {gig.isActive?"Active":"Inactive"} </button></td>
                     <td className="w-[20%] text-center"><button  className=" w-[5rem] p-1 rounded-sm">{gig.isBlock ? "Unblock" : "Block"}</button></td>
                     <td className="w-[20%] text-center"><button onClick={()=>naviagte(`/freelancer/${gig._id}/edit-gig`)} className="glass w-[5rem] p-1 rounded-sm "> Edit </button></td>
                     <td onClick={()=>handleDeleteGig(gig._id)} className="w-[20%] text-center"><button className="glass w-[5rem] p-1 rounded-sm "> Delete </button></td>
                     <td className="w-[20%] text-center"><button className="glass w-[5rem] p-1 rounded-sm "> View </button></td>
                  </tr>
               </div>
               )
            })
          }
        
      </div>
    </div>
    </div>
  )
}

export default FreelancerHandleGigs
