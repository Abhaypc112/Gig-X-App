
const UserViewPayment = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex mt-[9rem] w-[90%]">
        <div className=" w-[50%]">
        <div className="flex flex-col space-y-3">
          <img className="w-[90%] h-[20rem] rounded-lg" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b/design-modern-minimalist-business-logo.jpg" alt="gig-img" />
          <div className="flex justify-between w-[90%]">
          <span>I will design a modern minimalist logo</span>
          <span className="text-2xl font-bold">₹ 599</span>
        </div>
        <span className="text-xl font-bold">Basic</span>
        </div>
        </div>
        <div className=" w-[50%] flex justify-center">
          <div className="w-[70%] space-y-20 flex  flex-col">
             <div className="space-y-5 flex  flex-col">
              <span className="text-2xl font-bold">Payment Summary</span>
                <div className="flex justify-between">
                  <span className="text-gray-400">Playful Beginnings</span>
                  <span className="font-bold">599</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Discount</span>
                  <span className="font-bold">0</span>
                </div>
                <div className="border-b-2 border-dashed border-gray-400 w-full"></div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Amount Payable</span>
                  <span className="font-bold text-xl" >599</span>
                </div>
             </div>
              <div className="h-[4rem] rounded-md bg-black px-5 flex items-center justify-between ">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Total Amount</span>
                    <span className="font-bold text-lg">₹ 599</span>
                  </div>
                  <button className="bg-green-600 p-3  font-bold px-8 rounded-full">Pay Now</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserViewPayment
