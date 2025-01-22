import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { adminGetAllOrders } from "../../redux/slices/admin/manageOrderSlice";
import moment from "moment";

const AdminHandleOrders = () => {
   const dispatch = useAppDispatch();
   const {orders} = useAppSelector((state)=>state.admin.adminOrderManagement);
   const [filter, setFilter] = useState<boolean | null>(null);
   
   const filteredData = orders.filter((order) => {
      if (filter === null) return true;
      return order.orderStatus === filter;
   });
   

   useEffect(()=>{
      dispatch(adminGetAllOrders());
   },[dispatch])

  return (
    <div>
      <div className=" flex flex-col min-h-screen p-5 space-y-6">
      <div className="top-side flex justify-between mt-[8rem] ml-[20rem] mr-[3rem]">
        <div className="options w-[100%] space-x-5 font-bold">
            <button onClick={()=>setFilter(null)} className="glass px-5 p-3 rounded-md text-xs">ALL</button>
            <button onClick={()=>setFilter(true)} className="glass px-5 p-3 rounded-md text-xs">COMPLETED</button>
            <button onClick={()=>setFilter(false)} className="glass px-5 p-3 rounded-md text-xs">ACTIVE</button>
            <button className="glass px-5 p-3 rounded-md text-xs">BTN</button>
        </div>
        <div className="search ">
            <input type="text" placeholder="Search" className="bg-transparent glass border-none focus:outline-none p-2 rounded-md " />
        </div>
      </div>
      <div className="bottum-side  ml-[20rem] mr-[3rem] space-y-5 ">
          <div className="table-heading w-[100%] glass h-14 rounded-md">
             <tr className="w-[100%] flex  items-center h-14 px-5 text-center">
                <td className="w-[30%] font-bold">BUYER</td>
                <td className="w-[20%] font-bold">GIG</td>
                <td className="w-[20%] font-bold">DATE</td>
                <td className="w-[20%] font-bold">TOTAL</td>
                <td className="w-[20%] font-bold">PAYMENT STATUS</td>
                <td className="w-[20%] font-bold">STATUS</td>
             </tr>
          </div>
          {
            filteredData?.map((order)=>{
               return(
               <div className="table-data w-[100%] border h-14 rounded-md">
                  <tr className="w-[100%] flex items-center h-14 px-5">
                     <td className="w-[30%] space-x-3"><input type="checkbox" /><span>{order?.userId?.name}</span></td>
                     <td className="w-[20%] text-center">{order.gigId.gigName}</td>
                     <td className="w-[20%] text-center">{moment(order.createdAt).format("YYYY-MM-DD")}</td>
                     <td className="w-[20%] text-center">₹ {order?.gigPlan?.price}</td>
                     <td className="w-[20%] text-center"><button className={order.paymentStatus?"bg-[#13a14c]  p-1 rounded-sm w-[5rem]":"bg-[#a11313]  p-1 rounded-sm w-[5rem]"}> {order.paymentStatus?"Paid":"Pending"} </button></td>
                        {
                           order.paymentStatus ? (
                              <td className="w-[20%] text-center"><button className={order.orderStatus?"bg-[#13a14c] px-3 p-1 rounded-sm w-[7rem]":"bg-yellow-500 px-3 p-1 rounded-sm w-[7rem]"}>{order.orderStatus?"Completed":"Active"} </button></td>
                           ):(
                              <td className="w-[20%] text-center"><button className="bg-[#a11313] px-3 p-1 rounded-sm w-[7rem]">Pending</button></td>
                           )
                        }
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

export default AdminHandleOrders
