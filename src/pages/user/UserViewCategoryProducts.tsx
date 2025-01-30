import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import { userGetAllGigs } from "../../redux/slices/user/homeSlice";

const UserViewCategoryProducts = () => {
    const dispatch = useAppDispatch();
    const {gigs} = useAppSelector((state)=>state.user.userHome);
    const {category} = useParams();
    const categoryGigs = gigs.filter((gig)=>gig.gigCategory.gigCategory === category);
    const navigate = useNavigate();
  
    useEffect(()=>{
      dispatch(userGetAllGigs());
    },[dispatch])

  return (
    <div className="w-[100%] flex justify-center">
      <div className="w-[90%] space-y-10  mt-[9rem]">
        <h1 className="text-4xl font-bold">Gigs by category </h1>
        <div className="gigs flex gap-5 flex-wrap justify-center">
          {
           categoryGigs?.map((gig)=>{
            return(
              <div className="w-[20rem] h-[20rem] rounded-md space-y-2 ">
              <img  onClick={()=>navigate(`/view-gig/${gig._id}`)} className="w-[100%] h-[60%] rounded-md" src={gig.gigImages[0]} alt="gig-image" />
              <div className="flex flex-col space-y-1">
                <div className="flex space-x-3 items-center" >
                  <img className=" w-6 h-6 rounded-full" src={gig.gigOwner.profileImg} alt="profile-img" />
                  <span className="text-sm">{gig.gigOwner.name}</span>
                </div>
                  <span>{gig.gigDescription}</span>
                  {/* <span>⭐ 4.8 <span className="text-sm">(125)</span></span> */}
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

export default UserViewCategoryProducts;
