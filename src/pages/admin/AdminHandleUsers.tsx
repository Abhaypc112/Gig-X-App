import { useEffect } from "react"
import { adminGetAllUsers, adminUpdateUser } from "../../redux/slices/admin/userHandleSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

interface Iusers {
   _id:string;
    name:string;
    email:string;
    role:string;
    isBlock:boolean;
    skills:[string];
    experience:string;
}

const AdminHandleUsers = () => {
   const dispatch = useAppDispatch();
   const {users} = useAppSelector((state) => state.admin.userManagemant);

   useEffect(() => {
      dispatch(adminGetAllUsers());
   },[dispatch])

   const handleUserRole = async (userId : string )  => {
      await dispatch(adminUpdateUser({userId}))
   }
   
  return (
    <div>
      <div className=" flex flex-col min-h-screen p-5 space-y-6">
      <div className="top-side flex justify-between mt-[8rem] ml-[20rem] mr-[3rem]">
        <div className="options w-[100%] space-x-5 font-bold">
            <button className="glass px-5 p-3 rounded-md text-xs">CLIENTS</button>
            <button className="glass px-5 p-3 rounded-md text-xs">FREELANCERS</button>
            <button className="glass px-5 p-3 rounded-md text-xs">BTN</button>
            <button className="glass px-5 p-3 rounded-md text-xs">BTN</button>
        </div>
        <div className="search ">
            <input type="text" placeholder="Search" className="bg-transparent glass border-none focus:outline-none p-2 rounded-md " />
        </div>
      </div>
      <div className="bottum-side  ml-[20rem] mr-[3rem] space-y-5 ">
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
            users && users.map((user : Iusers) => {
               return(
                  <div className="table-data w-[100%] border h-14 rounded-md">
                     <tr className="w-[100%] flex items-center h-14 px-5 ">
                        <td className="w-[30%] space-x-3"><input type="checkbox"/><span >{user.name}</span></td>
                        <td className="w-[20%] text-center">20</td>
                        <td className="w-[20%] text-center">{user.role}</td>
                        <td className="w-[20%] text-center"><button onClick={()=>handleUserRole(user._id)} className="bg-[#7f7f7f] w-[5rem] p-1 rounded-sm ">{user.isBlock ? "Unblock" : "Block"}</button></td>
                        <td className="w-[20%] text-center"><button className="bg-[#13a14c] w-[5rem] p-1 rounded-sm "> View </button></td>
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
