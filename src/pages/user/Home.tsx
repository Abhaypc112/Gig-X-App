import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { userGetAllCategorys, userGetAllGigs } from "../../redux/slices/user/homeSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useAppDispatch();
  const {categotys,gigs} = useAppSelector((state)=>state.user.userHome);
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(userGetAllCategorys());
    dispatch(userGetAllGigs());
  },[dispatch])

  return (
    <div className="w-[100%] flex justify-center">
      <div className="w-[90%] space-y-10  mt-[9rem]">
        <div className="banner">
          <img className="w-[100%] h-[15rem] rounded-md" src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/11/BF-Prep-Calendar_in-text-banner-1024x283.png" alt="banner" />
        </div>
        <h1 className="text-4xl font-bold">Popular services</h1>
        <div className="services flex overflow-x-auto w-full scroll-icon-none">
            <div>
              <div className="flex gap-5  w-full" >
                {
                  categotys?.map((categoty)=>{
                    return(
                      <div className="w-[12rem] h-[15rem] bg-black rounded-md flex flex-col justify-evenly items-center">
                        <h1 className="font-bold text-lg">{categoty.gigCategory}</h1>
                        <img className="w-[10rem] h-[10rem] rounded-md" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png" alt="" />
                      </div>
                    )
                  })
                }
              </div>
            </div>   
        </div>
        <h1 className="text-4xl font-bold">Gigs you may like </h1>
        <div className="gigs flex gap-5 flex-wrap justify-center">
          {
           gigs?.map((gig)=>{
            return(
              <div className="w-[20rem] h-[20rem] rounded-md space-y-2 ">
              <img  onClick={()=>navigate(`/view-gig/${gig._id}`)} className="w-[100%] h-[60%] rounded-md" src={gig.gigImages[0]} alt="gig-image" />
              <div className="flex flex-col space-y-1">
                <div className="flex space-x-3 items-center" >
                  <img className=" w-6 h-6 rounded-full" src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/6ffaddf02ac2446c4483f308e92428c5-1556216315452/c6d0501e-a3f0-4b18-a47a-24b6085c9246.jpg" alt="profile-img" />
                  <span className="text-sm">{gig.gigOwner.name}</span>
                </div>
                  <span>{gig.gigDescription}</span>
                  <span>⭐ 4.8 <span className="text-sm">(125)</span></span>
                  <span>From <span className="font-bold">₹ {gig.gigPricing.basic.price}</span></span>
              </div>
              </div>
            )
           })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
