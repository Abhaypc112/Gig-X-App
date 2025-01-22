import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { IOrder } from "../interface/orderInterface";

const razorpayPayment = async (oredrDetails : IOrder , navigate: ReturnType<typeof useNavigate>) => {
 
    try {
      const { data: order } = await axiosInstance.post("/payment/create-order", {
        amount:oredrDetails.gigPlan?.price, // Amount in INR
        currency: "INR",
      });
      const options = {
        key: "rzp_test_r8IxxuUt9hWcpL",
        amount: order.amount,
        currency: order.currency,
        name: "Gig X",
        description: "Gig Order",
        order_id: order.id,
        handler: async (response: any) => {
          // Verify payment
          const verification = await axiosInstance.post("/payment/verify", {response,oredrDetails});
          console.log(verification)
          if (verification.data.success) {
              alert("Payment Verification Success");
              navigate('/orders')
          } else {
            alert("Payment Verification Failed");
          }
        },
        prefill: {
          name: "gig-x",
          email: "gigx@gmail.com",
          contact: "9497860963",
        },
        theme: {
          color: "#FABD00",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

export default razorpayPayment;
