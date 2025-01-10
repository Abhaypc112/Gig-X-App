import { useNavigate } from "react-router-dom";

const UserViewGig = () => {
    const navigate = useNavigate();
    const totalReviews = 159;
    const ratings = [
      { stars: 5, count: 100 },
      { stars: 4, count: 20 },
      { stars: 3, count: 10 },
      { stars: 2, count: 5 },
      { stars: 1, count: 1 },
    ];
  
    const averageRating = 4.8;
  
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 h-screen w-[90%] mt-[9rem] relative">
      <div className="chat fixed bottom-20 z-10">
            <div className="w-[15rem] h-[5rem] bg-black rounded-full flex space-x-3 items-center px-3">
                <img className="w-14 h-14 rounded-full" src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/6ffaddf02ac2446c4483f308e92428c5-1556216315452/c6d0501e-a3f0-4b18-a47a-24b6085c9246.jpg" alt="profile" />
                <div className="flex flex-col">
                    <span>Message Anvi</span>
                    <span className="flex space-x-3 items-center">
                        <span className="h-3 w-3 text-xs bg-green-600 rounded-full"></span>
                        <span>Online</span>
                    </span>
                </div>
            </div>
        </div>
        <div className=" col-span-2 space-y-10">
            <div className="space-y-5">
                <h1 className="text-3xl font-bold">I will design a modern minimalist logo</h1>
                <div className="flex space-x-3">
                    <img className="w-14 h-14 rounded-full" src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/6ffaddf02ac2446c4483f308e92428c5-1556216315452/c6d0501e-a3f0-4b18-a47a-24b6085c9246.jpg" alt="profile" />
                    <div className="flex flex-col">
                        <span className="font-bold">Listypop</span>
                        <span>⭐ 4.8 <span className="text-sm">(123 reviews)</span></span>
                    </div>
                </div>
                <div className="space-y-5">
                    <img className="w-[80%] h-[20rem] rounded-lg" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b/design-modern-minimalist-business-logo.jpg" alt="gig-img" />
                    <div className="flex w-[80%] space-x-5 overflow-x-auto scroll-icon-none">
                        <img className="w-32 h-20 rounded-md" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b/design-modern-minimalist-business-logo.jpg" alt="" />
                        <img className="w-32 h-20 rounded-md" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b/design-modern-minimalist-business-logo.jpg" alt="" />
                        <img className="w-32 h-20 rounded-md" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b/design-modern-minimalist-business-logo.jpg" alt="" />
                        <img className="w-32 h-20 rounded-md" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b/design-modern-minimalist-business-logo.jpg" alt="" />
                        <img className="w-32 h-20 rounded-md" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b/design-modern-minimalist-business-logo.jpg" alt="" />
                        <img className="w-32 h-20 rounded-md" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b/design-modern-minimalist-business-logo.jpg" alt="" />
                        <img className="w-32 h-20 rounded-md" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b/design-modern-minimalist-business-logo.jpg" alt="" />
                        <img className="w-32 h-20 rounded-md" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/127707871/original/58036eaa037a90f7230bfc551916036a455c3e4b/design-modern-minimalist-business-logo.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="about-gig w-[80%] flex flex-col space-y-5">
                <h1 className="text-2xl font-bold">About this gig</h1>
                <span>
                Hi,
                Are you seeking a clean and modern minimalist logo to elevate your brand's identity? You've come to the right place!
                I'm Alvish, a graphic designer based in India, specializing in Minimalist Logo Design and Branding. With over 700 projects completed on Fiverr and a dedication to perfection, I'm here to give your brand the boost it deserves.
                Why choose me?
                - Fast Communication & Better Service: I prioritize clear communication and timely delivery.
                - Minimalist Logo Design Specialist: I'm dedicated to creating clean and timeless designs.
                - High-Quality and 100% Satisfaction Guaranteed: Your satisfaction is my top priority.
                - Copyrights: You'll own the copyrights to the final design.
                </span>
            </div>
            <div className="reviews w-[80%]">
            <div className="p-4 text-white rounded-md w-full max-w-md">
                <h2 className="text-xl font-bold">Reviews</h2>
                <p className="mt-1 text-sm">{totalReviews} reviews for this Gig</p>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-yellow-400 text-xl">⭐</span>
                    <span className="text-lg font-semibold">{averageRating}</span>
                    <span className="text-sm text-gray-400">({totalReviews} reviews)</span>
                </div>
                <div className="mt-4 w-full">
                    {ratings.map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-2 mt-2 w-full">
                        <span className="w-12 text-sm">{rating.stars} Stars</span>
                        <div className="relative w-full bg-gray-600 rounded-full h-2">
                        <div
                            className="absolute top-0 left-0 h-2 bg-yellow-400 rounded-full"
                            style={{
                            width: `${(rating.count / totalReviews) * 100}%`,
                            }}
                        ></div>
                        </div>
                        <span className="text-sm text-gray-400">({rating.count})</span>
                    </div>
                    ))}
                </div>
                </div>
                </div>
            <div className="glass w-[50%] h-[12rem] rounded-md p-5 space-y-5">
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-5 items-center">
                            <img className="w-14 h-14 rounded-full" src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/6ffaddf02ac2446c4483f308e92428c5-1556216315452/c6d0501e-a3f0-4b18-a47a-24b6085c9246.jpg" alt="profile" />
                            <div className="flex flex-col">
                                <span className="font-bold">Vishnumaya KP</span>
                                <span className="text-gray-400">Calicut</span>
                            </div>
                        </div>
                            <span className="text-gray-400 text-sm">12-02-2025</span>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <span>⭐ 4 rating</span>
                        <p>Fast Communication & Better Service</p>
                    </div>
            </div>
            <div>

            </div>
        </div>
        <div className="continue right-20 fixed col-span-1 ">
            <div className="glass w-[30rem] h-[33rem] rounded-xl flex flex-col items-center p-5 justify-between">
                   <div className="">
                   <div className="plans flex justify-between w-full text-center">
                        <div className="w-[30%] glass p-4 rounded-md">Basic</div>
                        <div className="w-[30%] glass p-4 rounded-md">Standerd</div>
                        <div className="w-[30%] glass p-4 rounded-md">Premium</div>
                    </div>
                    <div className="discription w-fullf flex flex-col gap-10">
                        <div className="font-bold w-full flex justify-between items-center">
                            <span>Playful Beginnings</span>
                            <span className="text-3xl">₹ 699</span>
                        </div>
                        <div className="flex flex-col gap-10">
                            <span>1 unique logo concept - High-resolution JPG and Transparent background file (PNG)</span>
                            <div className="flex justify-between">
                                <span>Valid Up to : 5 Days</span>
                                <span>Max  : 15 Works</span>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                   </div>
                    <button onClick={()=>navigate('/user/payment')} className="w-full glass p-4 rounded-md font-bold">Continue</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserViewGig
