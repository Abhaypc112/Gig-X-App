import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import { useGetOrdersByUserId } from "../../redux/slices/user/orderSlice";
import LoadingPage from "../../components/LoadingPage";
import razorpayPayment from "../../utils/razorpayPayment";


const UserViewPayment = () => {
  const dispatch = useAppDispatch();
  const {gigId} = useParams();
  const {orders,loading} = useAppSelector((state)=>state.user.userOrder);
  const order = orders.find((order)=> order.gigId?._id === gigId && order.paymentStatus === false);
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(useGetOrdersByUserId())
    if(order?.paymentStatus) navigate('/orders')
  },[dispatch])

  const handlePayment = async() =>{
    await razorpayPayment(order!,navigate) 
  }

  if(loading) {
    return <LoadingPage/>
  }
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex flex-col md:flex-row mt-[9rem] w-[90%] space-y-10">
        <div className=" w-[100%] md:w-[50%]">
        <div className="flex flex-col space-y-3">
          <img className="md:w-[90%] h-[20rem] rounded-lg" src={order?.gigId?.gigImages[0]} alt="gig-img" />
          <div className="flex justify-between w-[90%]">
          <div className="flex flex-col">
            <span>{order?.gigId?.gigName}</span>
            <span>{order?.gigId?.gigDescription}</span>
          </div>
          <span className="text-2xl font-bold">₹ {order?.gigPlan?.price}</span>
        </div>
        <span className="text-xl font-bold">{order?.gigPlan?.plan}</span>
        </div>
        </div>
        <div className=" w-[100%] md:w-[50%] flex justify-center">
          <div className=" w-[100%] md:w-[70%] space-y-20 flex  flex-col">
             <div className="space-y-5 flex  flex-col">
              <span className="text-2xl font-bold">Payment Summary</span>
                <div className="flex justify-between">
                  <span className="text-gray-400">Playful Beginnings</span>
                  <span className="font-bold">₹ {order?.gigPlan?.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Discount</span>
                  <span className="font-bold">0</span>
                </div>
                <div className="border-b-2 border-dashed border-gray-400 w-full"></div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Amount Payable</span>
                  <span className="font-bold text-xl" >{order?.gigPlan?.price}</span>
                </div>
             </div>
              <div className="h-[4rem] rounded-md bg-black px-5 flex items-center justify-between ">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Total Amount</span>
                    <span className="font-bold text-lg">₹ {order?.gigPlan?.price}</span>
                  </div>
                  <button onClick={handlePayment} className="bg-green-600 p-3  font-bold px-8 rounded-full">Pay Now</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserViewPayment
