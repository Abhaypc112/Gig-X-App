import { useEffect, useState } from "react";
import LoadingPage from "../../components/LoadingPage";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import moment from "moment";
import { useGetOrdersByUserId } from "../../redux/slices/user/orderSlice";
import { useNavigate } from "react-router-dom";
import UserRating from "../../components/user/UserRating";
import { userAddGigRating } from "../../redux/slices/user/reviewSlice";

const UserViewOrders = () => {
   const dispatch = useAppDispatch();
   const {orders,loading} = useAppSelector((state)=>state.user.userOrder);
   const naviagte = useNavigate();
   const [filter, setFilter] = useState<boolean | null>(null);
   const [filteredData,setFilteredData] = useState(orders);
   const [searchTerm, setSearchTerm] = useState("");
   const [gigId,setGigId] = useState("");
   const [reviewData,setReviewData] = useState({
      rating:0,
      gigId:"",
      comment:""
   })
   
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

   const handleRatingChange = (rating: number) => {
      setReviewData({...reviewData,rating:rating,gigId:gigId});
    };

   const handleOnRating = async () => {
      await dispatch(userAddGigRating(reviewData));
      setGigId("")
      setReviewData({
         rating:0,
         gigId:"",
         comment:""
      })
   }
   
   if(loading) {
      return <LoadingPage/>
    }
  return (
    <div className="min-h-screen flex justify-center">
      <div className=" flex flex-col min-h-screen p-5 space-y-6 w-[90%] relative">
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
                <td className="w-[20%] font-bold">ADD REVIEW</td>
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
                              <>
                                 <td className="w-[20%] text-center"><button className={order.orderStatus?"bg-[#13a14c] px-3 p-1 rounded-sm w-[7rem]":"bg-yellow-500 px-3 p-1 rounded-sm w-[7rem]"}>{order.orderStatus?"Completed":"Active"} </button></td>
                                 <td className="w-[20%] text-center"><button onClick={()=>setGigId(order.gigId._id)} className="glass px-3 p-1 rounded-sm w-[7rem]">Add Review</button></td></>
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
      {
         gigId && (
            <div className="w-[100%] h-screen flex justify-center absolute items-center">
               <div className="review-modal bg-black w-[90%] md:w-[70%] h-[70%] rounded p-10 flex flex-col justify-between">
               <div className="flex justify-between">
                  <h1 className="text-xl font-bold">Add Review</h1>
                  <button onClick={()=>setGigId("")} className="glass px-5 p-2 rounded-md font-bold text-sm">Cancel</button>
               </div>
                  <div className="flex justify-center">
                  <UserRating totalStars={5} onRate={handleRatingChange}/>
               </div>
                  <div className="flex justify-center">
                     <textarea onChange={(e)=>setReviewData({...reviewData,comment:e.target.value})} placeholder="Write Comments . . ." name="Comment" className='w-[90%] max-h-[150px] rounded-lg bg-transparent border p-5'></textarea>
                  </div>
                  <div className="flex justify-center">
                     <button onClick={handleOnRating} className="glass text-xl font-bold px-10 p-3 rounded w-[90%] text-yellow-500">Post</button>
                  </div>
               </div>
            </div>
         )
      }
    </div>
    </div>
  )
}

export default UserViewOrders
