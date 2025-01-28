import { useEffect, useState } from "react";
import LoadingPage from "../../components/LoadingPage";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import moment from "moment";
import { useGetOrdersByUserId } from "../../redux/slices/user/orderSlice";
import { useNavigate } from "react-router-dom";

const UserViewOrders = () => {
   const dispatch = useAppDispatch();
   const {orders,loading} = useAppSelector((state)=>state.user.userOrder);
   const naviagte = useNavigate();
   const [filter, setFilter] = useState<boolean | null>(null);
   const [filteredData,setFilteredData] = useState(orders);
   const [searchTerm, setSearchTerm] = useState("");
   

   useEffect(()=>{
      let result = orders;

      if(filter !== null){
         result = result.filter((order)=> order.orderStatus === filter)
      }

      if(searchTerm.trim() !== ""){
         result = result.filter((order)=>
            order.gigId.gigName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            order?.userId?.name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
         )
      }
      setFilteredData(result);
   },[orders,filter,searchTerm])

   useEffect(()=>{
      dispatch(useGetOrdersByUserId())
   },[dispatch])

   const handlePayment = (paymentStatus : boolean,gigId : string,plan : string) =>{
      if(!paymentStatus){
         naviagte(`/payment/${gigId}/${plan}`)
      }
   }
   
   if(loading) {
      return <LoadingPage/>
    }
  return (
    <div className="min-h-screen flex justify-center">
      <div className=" flex flex-col min-h-screen p-5 space-y-6 w-[90%]">
      <div className="top-side flex justify-between mt-[9rem]">
        <div className="options w-[100%] space-x-5 font-bold ">
        <button onClick={()=>setFilter(null)} className={filter === null ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>ALL</button>
            <button onClick={()=>setFilter(true)} className={filter === true ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>COMPLETED</button>
            <button onClick={()=>setFilter(false)} className={filter === false ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>ACTIVE</button>
            <button className="glass-btn px-5 p-3 rounded-md text-xs">BTN</button>
        </div>
        <div className="search ">
        <input onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search" className="bg-transparent glass border-none focus:outline-none p-2 rounded-md " />
        </div>
      </div>
      <div className="bottum-side space-y-5 ">
          <div className="table-heading w-[100%] glass h-14 rounded-md">
             <tr className="w-[100%] flex  items-center h-14 px-5 text-center">
                <td className="w-[30%] font-bold">FREELANCER</td>
                <td className="w-[20%] font-bold">GIG</td>
                <td className="w-[20%] font-bold">DATE</td>
                <td className="w-[20%] font-bold">TOTAL</td>
                <td className="w-[20%] font-bold">PAYMENT STATUS</td>
                <td className="w-[20%] font-bold">STATUS</td>
             </tr>
          </div>
          {
            filteredData?.map((order,index)=>{
               return(
                  <div key={index} className="table-data w-[100%] border h-14 rounded-md">
                     <tr className="w-[100%] flex items-center h-14 px-5">
                        <td className="w-[30%] space-x-3"><input type="checkbox" /><span>{order.gigId?.gigOwner.name}</span></td>
                        <td className="w-[20%] text-center">{order.gigId?.gigName}</td>
                        <td className="w-[20%] text-center">{moment(order.createdAt).format("YYYY-MM-DD")}</td>
                        <td className="w-[20%] text-center">₹ {order.gigPlan?.price}</td>
                        <td onClick={()=>handlePayment(order?.paymentStatus,order?.gigId?._id,order.gigPlan?.plan)} className="w-[20%] text-center"><button className={order.paymentStatus?"bg-[#13a14c]  p-1 rounded-sm w-[5rem]":"bg-[#a11313]  p-1 rounded-sm w-[5rem]"}> {order.paymentStatus?"Paid":"Pending"} </button></td>
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

export default UserViewOrders
