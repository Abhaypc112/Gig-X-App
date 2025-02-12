import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect, useState } from "react";
import { userGetAllGigs } from "../../redux/slices/user/homeSlice";
import { IGigPlan, IOrder } from "../../interface/orderInterface";
import { useGetOrdersByUserId, userCreateOrder } from "../../redux/slices/user/orderSlice";
import LoadingPage from "../../components/LoadingPage";
import { getGigReviewById } from "../../redux/slices/user/reviewSlice";
import moment from "moment";
import { getUser } from "../../redux/slices/user/profileSlice";
import Chat from "./UserChat";

const UserViewGig = () => {
    const {gigId} = useParams();
    const dispatch = useAppDispatch();
    const {gigs,loading} = useAppSelector((state)=>state.user.userHome);
    const {orders,error} = useAppSelector((state)=>state.user.userOrder);
    const {user} = useAppSelector((state)=>state.user.userProfile);
    const {reviews} = useAppSelector((state)=>state.user.userReview);
    const order = orders.find((order)=> order.gigId?._id === gigId);
    const gig = gigs.find((gig)=>gig._id === gigId);
    const navigate = useNavigate();
    const [imgIndex,setImgIndex] = useState(0);
    const [pricePlan,setPricePlan] = useState("basic");
    const [chatModal,setChatModal] = useState(false)
    
    useEffect(()=>{
        dispatch(useGetOrdersByUserId());
        dispatch(getUser());
        dispatch(userGetAllGigs());
        dispatch(getGigReviewById(gigId!))
    },[dispatch])


    const totalReviews = reviews.length;

    const calculateRatings = (reviews: { rating: number }[]) => {
        const ratingsMap: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        reviews.forEach((review) => {
          ratingsMap[review.rating] += 1;
        });
        return Object.entries(ratingsMap).map(([stars, count]) => ({
          stars: Number(stars),
          count,
        }));
      };
      
    const ratings = calculateRatings(reviews);
    const averageRatingFunction = (ratings: { stars: number, count: number }[]) => {
        const totalReviews = ratings.reduce((acc, r) => acc + r.count, 0); 
        const weightedSum = ratings.reduce((acc, r) => acc + r.stars * r.count, 0); 
        return totalReviews > 0 ? weightedSum / totalReviews : 0; 
      };
      const averageRating = averageRatingFunction(ratings);
    const handeleOrder = async (gigId :any) => {
        if(order) {
            alert("Go orders");
            navigate('/orders');
            return
        }
        if(pricePlan === "basic"){
            const gigPlan : IGigPlan = {
                plan:"basic",
                price:gig?.gigPricing.basic.price || 0,
                time:gig?.gigPricing.basic.time || ""
            }
            const orderData : IOrder = {gigId,gigPlan,paymentStatus:false}
            await dispatch(userCreateOrder(orderData))
        } 
        if(pricePlan === "standerd"){
            const gigPlan : IGigPlan = {
                plan:"standerd",
                price:gig?.gigPricing.standerd.price || 0,
                time:gig?.gigPricing.standerd.time || ""
            }
            const orderData : IOrder = {gigId,gigPlan,paymentStatus:false}
            await dispatch(userCreateOrder(orderData))
        } 
        if(pricePlan === "premium"){
            const gigPlan : IGigPlan = {
                plan:"premium",
                price:gig?.gigPricing.premium.price || 0,
                time:gig?.gigPricing.premium.time || ""
            }
            const orderData : any = {gigId,gigPlan}
            await dispatch(userCreateOrder(orderData))
        } 
        if(!error) navigate(`/payment/${gigId}/${pricePlan}`)
    }
    if(loading) {
        return <LoadingPage/>
      }
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 h-screen w-[90%] mt-[9rem] relative">
        { chatModal ?(
            <div className="chat z-10 fixed w-[90%] h-screen ">
                <Chat freelancer={gig?.gigOwner} senderId={user._id} receiverId={gig?.gigOwner._id}/>
            </div>
        ):(
            <div className="chat bottom-20 z-10 fixed w-[100%] ">
            <div onClick={()=>setChatModal(true)} className="w-[15rem] fixed h-[5rem] bg-black rounded-full flex space-x-3 items-center px-3">
                <img className="w-14 h-14 rounded-full" src={gig?.gigOwner.profileImg} alt="profile" />
                <div className="flex flex-col">
                    <span>{gig?.gigOwner.name}</span>
                    <span className="flex space-x-3 items-center">
                        <span className="h-3 w-3 text-xs bg-green-600 rounded-full"></span>
                        <span>Online</span>
                    </span>
                </div>
            </div>
        </div>
        )
    }
        <div className=" col-span-2 space-y-10">
            <div className="space-y-5">
                <h1 className="text-3xl font-bold">{gig?.gigDescription}</h1>
                <div className="flex space-x-3">
                    <img className="w-14 h-14 rounded-full" src={gig?.gigOwner.profileImg} alt="profile" />
                    <div className="flex flex-col">
                        <span className="font-bold">{gig?.gigOwner.name}</span>
                        <span>⭐ {Math.round(averageRating)} <span className="text-sm">{`(${totalReviews})`} reviews</span></span>
                    </div>
                </div>
                <div className="space-y-5">
                    <img className="w-[80%] h-[25rem] rounded-lg" src={gig?.gigImages[imgIndex]} alt="gig-img" />
                    <div className="flex w-[80%] space-x-5 overflow-x-auto scroll-icon-none">
                        {
                            gig?.gigImages.map((image,index) => {
                                return(
                                    <img onClick={()=>setImgIndex(index)} className="w-32 h-20 rounded-md" src={image} alt={`${index}-image`} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="about-gig w-[80%] flex flex-col space-y-5">
                <h1 className="text-2xl font-bold">About this gig</h1>
                <span>
                {
                    gig?.gigDescription
                }
                </span>
            </div>
            <div className="reviews w-[80%]">
            <div className="p-4 text-white rounded-md w-full max-w-md">
                <h2 className="text-xl font-bold">Reviews</h2>
                <p className="mt-1 text-sm">{totalReviews} reviews for this Gig</p>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-yellow-400 text-xl">⭐</span>
                    <span className="text-lg font-semibold">{Math.round(averageRating)}</span>
                    <span className="text-sm text-gray-400">{totalReviews} reviews</span>
                </div>
                <div className="mt-4 w-full">
                    {ratings.map((rating) => {
                        const percentage = totalReviews > 0 ? (rating.count / totalReviews) * 100 : 0;

                        return (
                        <div key={rating.stars} className="flex items-center gap-3 mt-2">
                            <span className="w-12 text-sm">{rating.stars} Stars</span>
                            <div className="relative  bg-gray-600 rounded-full h-2 w-[85%]">
                            <div
                                className="absolute top-0 left-0 h-2 bg-yellow-400 rounded-full "
                                style={{
                                width: `${Math.min(percentage, 100)}%`, // Prevent exceeding 100%
                                }}
                            ></div>
                            </div>
                            <span className="text-sm text-gray-400 w-10">{rating.count}</span>
                        </div>
                        );
                    })}
                    </div>

                </div>
                </div>
            {
                reviews && reviews.map((review)=>{
                    return(
                        <div className="glass w-[50%] h-[12rem] rounded-md p-5 space-y-5">
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-5 items-center">
                                    <img className="w-14 h-14 rounded-full" src={review.userId?.profileImg} alt="profile" />
                                    <div className="flex flex-col">
                                        <span className="font-bold">{review.userId?.name}</span>
                                    </div>
                                </div>
                                    <span className="text-gray-400 text-sm">{moment(review.createdAt).format('DD-MM-YYY')}</span>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <span>⭐{review.rating} rating</span>
                                <p>{review.comment}</p>
                            </div>
                         </div>
                    )
                })
            }
            <div>

            </div>
        </div>
        <div className="continue right-20 fixed col-span-1 mt-5">
            <div className="glass w-[26rem] h-[32rem] rounded-xl flex flex-col items-center p-5 justify-between">
                   <div className="flex flex-col justify-between w-full h-[25rem]">
                   <div className="plans flex justify-between w-full text-center">
                        <div onClick={()=>setPricePlan("basic")} className="w-[30%] glass p-4 rounded-md">Basic</div>
                        <div onClick={()=>setPricePlan("standerd")} className="w-[30%] glass p-4 rounded-md">Standerd</div>
                        <div onClick={()=>setPricePlan("premium")} className="w-[30%] glass p-4 rounded-md">Premium</div>
                    </div>
                    {
                        pricePlan === "basic" && (
                            <div className="discription w-full flex flex-col justify-evenly h-[20rem]">
                        <div className="font-bold w-full flex justify-between items-center">
                            <span>Playful Beginnings</span>
                            <span className="text-3xl">₹ {gig?.gigPricing.basic.price}</span>
                        </div>
                        <div className="flex flex-col gap-10">
                            <span> {gig?.gigName}</span>
                            <div className="flex justify-between">
                                <span>Valid Up to : {gig?.gigPricing.basic.time}</span>
                                <span>Owner  : {gig?.gigOwner.name}</span>
                            </div>
                            <div>

                                </div>
                            </div>
                        </div>
                        )
                    }{
                        pricePlan === "standerd" && (
                            <div className="discription w-full flex flex-col justify-evenly h-[20rem]">
                            <div className="font-bold w-full flex justify-between items-center">
                                <span>Playful Beginnings</span>
                                <span className="text-3xl">₹ {gig?.gigPricing.standerd.price}</span>
                            </div>
                            <div className="flex flex-col gap-10">
                                <span> {gig?.gigName}</span>
                                <div className="flex justify-between">
                                    <span>Valid Up to : {gig?.gigPricing.standerd.time}</span>
                                    <span>Owner  : {gig?.gigOwner.name}</span>
                                </div>
                                <div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        pricePlan === "premium" && (
                            <div className="discription w-full flex flex-col justify-evenly h-[20rem]">
                        <div className="font-bold w-full flex justify-between items-center">
                            <span>Playful Beginnings</span>
                            <span className="text-3xl">₹ {gig?.gigPricing.premium.price}</span>
                        </div>
                        <div className="flex flex-col gap-10">
                            <span> {gig?.gigName}</span>
                            <div className="flex justify-between">
                                <span>Valid Up to : {gig?.gigPricing.premium.time}</span>
                                <span>Owner  : {gig?.gigOwner.name}</span>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                        )
                    }
                   </div>
                    <button onClick={()=>handeleOrder(gig?._id)} className="w-full glass p-4 rounded-md font-bold">Continue</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserViewGig
