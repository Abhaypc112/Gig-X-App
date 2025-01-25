import { useEffect, useState } from "react"
import { adminBlockUser, adminGetAllUsers } from "../../redux/slices/admin/manageUserSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const AdminHandleUsers = () => {
   const dispatch = useAppDispatch();
   const { users } = useAppSelector((state) => state.admin.adminUserManagemant);
   const [filter, setFilter] = useState<string | null>(null);
   const [searchTerm, setSearchTerm] = useState("");
   const [filteredData, setFilteredData] = useState(users);
 
 
   useEffect(() => {
     let result = users;
 
     if (filter !== null) {
       result = result.filter((user) => user.role === filter);
     }
 
     if (searchTerm.trim() !== "") {
       result = result.filter((user) =>
         user.name!.toLowerCase().includes(searchTerm.toLowerCase()) ||
         user.email!.toLowerCase().includes(searchTerm.toLowerCase())
       );
     }
 
     setFilteredData(result);
   }, [users, filter, searchTerm]);
 
   
   useEffect(() => {
     dispatch(adminGetAllUsers());
   }, [dispatch]);

   const handleUser = async (userId :string )  => {
      if(userId) await dispatch(adminBlockUser({userId}))
   }
   
  return (
    <div>
      <div className=" flex flex-col min-h-screen p-5 space-y-6">
      <div className="top-side flex justify-between mt-[8rem] lg:ml-[20rem] lg:mr-[3rem]">
        <div className="options w-[100%] space-x-5 font-bold">
            <button onClick={()=>setFilter(null)} className={filter === null ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>ALL</button>
            <button onClick={()=>setFilter("user")}  className={filter === "user" ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>USERS</button>
            <button onClick={()=>setFilter("freelancer")} className={filter === "freelancer" ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>FREELANCERS</button>
            <button className="glass-btn px-5 p-3 rounded-md text-xs">BTN</button>
        </div>
        <div className="search ">
            <input onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search" className="bg-transparent glass border-none focus:outline-none p-2 rounded-md " />
        </div>
      </div>
      <div className="bottum-side  lg:ml-[20rem] lg:mr-[3rem] space-y-5 ">
          <div className="table-heading w-[100%] glass h-14 rounded-md">
             <tr className="w-[100%] flex  items-center h-14 px-5 text-center">
                <td className="w-[30%] font-bold ">NAME</td>
                <td className="w-[20%] font-bold">TOTAL ORDERS</td>
                <td className="w-[20%] font-bold">ROLES</td>
                <td className="w-[20%] font-bold">BLOCK</td>
                <td className="w-[20%] font-bold">VIEW</td>
             </tr>
          </div>
         {
            filteredData && filteredData.map((user) => {
               return(
                  <div className="table-data w-[100%] border border-gray-400 h-20 lg:h-14 rounded-md flex items-center">
                     <tr className="w-[100%] flex items-center h-14 px-5 ">
                        <td className="w-[30%] space-x-3 flex items-center"><img className="w-10 h-10 rounded-full" src={user.profileImg} alt="profile-image" /><span >{user.name}</span></td>
                        <td className="w-[20%] text-center">20</td>
                        <td className="w-[20%] text-center">{user.role}</td>
                        <td className="w-[20%] text-center"><button onClick={()=>handleUser(user._id)} className="glass md:w-[5rem] p-1 rounded-sm">{user.isBlock ? "Unblock" : "Block"}</button></td>
                        <td className="w-[20%] text-center"><button className="glass md:w-[5rem] p-1 rounded-sm "> View </button></td>
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

export default AdminHandleUsers
