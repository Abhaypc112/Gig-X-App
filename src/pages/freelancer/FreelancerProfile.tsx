import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useEffect, useState } from 'react';
import { freelancerGetAllGigs } from '../../redux/slices/freelancer/gigHandleSlice';
import { freelancerEditById, freelancerGetById } from '../../redux/slices/freelancer/freelancerProfileHandleSlice';
import moment from 'moment';
import { FaEdit } from "react-icons/fa";
import ButtonLoading from '../../components/ButtonLoading';

const FreelancerProfile = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {gigs} = useAppSelector((state) => state.freelancer.freelancerGigManagement);
    const {freelancer,loading} = useAppSelector((state) => state.freelancer.freelancerProfileManagement);
    const [field,setField] = useState("");
    const [editUser,setEditUser] = useState({
            description:"",
            languages:[""],
            skills:[""],
    });
    const [editProfile,setEditProfile] = useState(false)
    const [inputData,setInputData] = useState("")
    const [profileData,setProfileData] = useState({
        profileImg:"",
        name:""
    })
    const [image, setImage] = useState<File[]> ([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setImage([file]);
            setProfileData({...profileData,profileImg:""})
          }
    };
    const handleProfile = async() => {
        console.log(profileData.name)
        const formData = new FormData();
        formData.append('data',JSON.stringify({name:profileData.name}));
        formData.append("profileImg", image[0]);
        await dispatch(freelancerEditById(formData))
        setProfileData({
            profileImg:"",
            name:""
        });
        setImage([]);
        setEditProfile(false)
    }

    useEffect(()=>{
        if(freelancer){
            setEditUser(
                {
                    description:freelancer.description!,
                    languages:freelancer.languages!,
                    skills:freelancer.skills!,
                }
            )
            setProfileData(
                {
                    profileImg:freelancer.profileImg!,
                    name:freelancer.name!
                }
            )
        }
    },[field,editProfile])

    const handleOnChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setInputData(value)
        if(field === "description"){
            setEditUser({...editUser,description:value})
        }
    }

    const addToState = () => {
        console.log(inputData)
        if(field === "languages"){
            setEditUser({
                ...editUser,
                languages: [...editUser.languages, inputData],
            });
            setInputData(" ")
        }
        if(field === "skills"){
            setEditUser({
                ...editUser,
                skills: [...editUser.skills, inputData],
            });
            setInputData(" ")
        }
        
    }

    const handleDelete = () => {
        if(field === "description"){
            setEditUser({...editUser,description:""})
        }
        if(field === "skills"){
            setEditUser({...editUser,skills:[]})
        }
        if(field === "languages"){
            setEditUser({...editUser,languages:[]})
        }
    }

    const handleOnSave = async () => {
        const jsonPayload = JSON.stringify({
            skills : editUser.skills,
            languages : editUser.languages,
            description : editUser.description
          })
        const formData = new FormData();
        formData.append("data",jsonPayload);
        await dispatch(freelancerEditById(formData))
        setField("");
    }
 
    useEffect(()=>{
        dispatch(freelancerGetAllGigs())
        dispatch(freelancerGetById())
    },[dispatch])
    
  return (
      <div className="w-[full] flex justify-center relative min-h-screen ">
      <div className="grid md:grid-cols-4 grid-rows-5 w-[90%] gap-5 ">
        <div className=" row-span-5 col-span-2 lg:col-span-1 grid grid-rows-5 gap-5 mt-[9rem]">
            <div className="glass rounded-md h-[15rem] flex flex-col items-center p-10 space-y-2  md:w-[20rem]">
               <img src={freelancer.profileImg} alt="profile" className='w-24 h-24 rounded-full relative'/>
                <FaEdit onClick={()=>setEditProfile(true)} className='absolute text-yellow-500 bottom-28'/>
                <h1 className='font-bold'>{freelancer.name}</h1>
                <div className='w-[100%] space-y-2'>
                    <div  className='flex justify-between w-[100%] text-xs'><span className='font-bold'>From</span> <span className='text-[#A9A9A9]'>Calicut</span></div>
                    <div  className='flex justify-between w-[100%] text-xs' ><span className='font-bold'>Member since</span> <span className='text-[#A9A9A9]'>{moment(freelancer.createdAt).format("DD-MM-YYYY")}</span></div>
                </div>
            </div>
            <div className="glass rounded-md h-[15rem] md:w-[20rem]">
                <div className="flex justify-between p-5">
                    <h1 className="font-bold">Description</h1>
                    <button onClick={() => setField("description")} className="glass px-3 p-1 rounded text-xs"> Edit</button>
                </div>
                <div className="max-w-[100%] text-sm text-[#A9A9A9] p-5 overflow-hidden"> 
                    <p className="break-words">
                        {freelancer.description}
                    </p>
                </div>
            </div>

            <div className="glass rounded-md h-[15rem] md:w-[20rem]">
                <div className='flex justify-between p-5'>
                <h1 className='font-bold'>Languages</h1>
                    <button onClick={()=>setField("languages")} className='glass px-3 p-1 rounded text-xs'>Edit</button>
                </div>
                <div className='p-5 text-sm text-[#A9A9A9]'>
                    {
                        freelancer.languages?.map((lang) => {
                            return(
                                <p>{lang}</p>
                            )
                        })
                    }
                </div>
            </div>
            <div className="glass rounded-md h-[15rem] md:w-[20rem]">
                <div className='flex justify-between p-5'>
                    <h1 className='font-bold'>Skills</h1>
                    <button onClick={()=>setField("skills")} className='glass px-3 p-1 rounded text-xs'>Edit</button>
                </div>
                <div className='p-5 text-sm text-[#A9A9A9]'>
                    {
                        freelancer.skills?.map((skill) => {
                            return(
                                <p>{skill}</p>
                            )
                        })
                    }
                </div>
            </div>

        </div> 
        <div className=" md:col-span-2 lg:col-span-3 row-span-7 space-y-8 mt-[9rem]">
            <div className="glass h-20 rounded-md flex justify-between items-center px-5">
                <button className=" px-5 p-3 rounded-md font-bold text-xl">TOTAL GIGS</button>
                <button onClick={()=>navigate('/freelancer/create-gig')} className="glass px-5 p-3 rounded-md font-bold text-xs text-yellow-500">CREATE GIG</button>
            </div>
            <div className="flex gap-8 flex-wrap">
            {
                gigs?.map((gig,index) => {
                    return(
                    <div key={index} className="glass rounded-md h-[20rem] md:h-[18rem] w-full lg:w-[20rem] p-3 space-y-3">
                        <img className='h-[13rem] md:h-[11rem] w-full rounded-md' src={gig.gigImages[0]} alt="gig-image" />
                        <p className='text-sm text-[#A9A9A9]'>{gig.gigDescription}</p>
                        <div className='flex justify-between '>
                            <button onClick={()=>navigate(`/freelancer/${gig._id}/edit-gig`)} className='glass px-3 rounded text-xs'>Edit</button>
                            <h1 className='font-bold'>₹ {gig.gigPricing.basic.price}</h1>
                        </div>
            </div>
                    )
                })
            }
            </div>
        </div>
        <div className='absolute w-[100%] mt-[9rem] left-0'>
            {
                field !== "" && (
                    <div className="flex justify-center w-[100%] ">
                        <div className="fixed w-[90%] h-[30rem] bg-black z-10 flex flex-col justify-evenly space-y-5 py-5 px-10 rounded">
                        <div className="flex justify-between px-5">
                        <h1 className="text-xl font-bold">Edit {field}</h1>
                        <button onClick={()=>setField("")} className="glass px-5 p-3 rounded-md font-bold text-xs">Cancel</button>
                 </div>
                 <div className="flex flex-col justify-between items-center space-y-10">
                    <div className='flex gap-3 w-full  flex-wrap '>
                    {
                       (field === "skills") ? editUser.skills && editUser.skills.map((skill)=>{
                            return(
                                <div>
                                    <button className='glass-btn px-5 p-1 rounded'>{skill}</button>
                                </div>
                            )
                        })
                        : (field === "languages") ? editUser.languages && editUser.languages.map((Language)=>{
                            return(
                                <div>
                                    <button className='glass-btn px-5 p-1 rounded'>{Language}</button>
                                </div>
                            )
                        })
                        :(<div className='flex justify-evenly w-full '>
                            <button className='glass-btn p-1 rounded w-[60%] overflow-auto scroll-icon-none h-16'>{editUser.description}</button>
                        </div>)
                    }
                    </div>
                    
                    <button onClick={handleDelete} className='glass-btn px-5 p-1 rounded h-10 text-red-500 font-bold'>Delete</button>
                     <input onChange={handleOnChange} type="text" placeholder='Enter' name={field}  className='w-[100%] h-[55px] rounded-lg bg-transparent border p-5'/>
                     <div className='flex justify-between w-[100%] '>
                        {
                            field !== "description" && <button onClick={addToState}  className="glass w-[40%] p-3 rounded-md font-bold text-yellow-500">Add</button>
                        }
                        <button onClick={handleOnSave}  className="glass w-[40%] p-3 rounded-md font-bold text-yellow-500">Save</button>
                     </div>
                 </div>
           </div>
        </div>
                )
            }
            {
                editProfile && (
                    <div className="flex justify-center w-[100%] ">
                        <div className="fixed w-[90%] md:w-[50%] h-[35rem] md:h-[35rem] bg-black z-10 flex flex-col justify-evenly space-y-5 py-5 px-10 rounded">
                        <div className="flex justify-between px-5">
                        <h1 className="text-xl font-bold">Edit Profile</h1>
                        <button onClick={()=>setEditProfile(false)} className="glass px-5 p-3 rounded-md font-bold text-xs">Cancel</button>
                 </div>
                 <div className="flex flex-col justify-between items-center space-y-10">
                    <div className='flex gap-3 w-full  flex-wrap '>
                    
                    </div>
                    
                    <div className='w-full flex items-center gap-5 justify-between'>
                        <div className='flex items-center gap-5'>
                        {
                            (image.length > 0 || profileData.profileImg ) && <img src={profileData.profileImg?profileData.profileImg:URL.createObjectURL(image[0])} alt="profile" className='w-16 h-16 rounded-full relative'/>
                        }
                            <label htmlFor="profile-img" className='left-0'>Profile Image</label>
                        </div>
                        <button onClick={handleDelete} className='glass-btn px-5 p-1 rounded h-10 text-red-500 font-bold'>Delete</button>
                    </div>
                     <div  className='w-[100%] h-[55px] rounded-lg bg-transparent border p-5 flex items-center'>
                        <input onChange={handleFileChange} type="file" placeholder='Upload' name='profile-img' />
                     </div>
                     <input onChange={(e)=>setProfileData({...profileData,name:e.target.value})} type="text" value={profileData.name} placeholder='Enter name' name="name"  className='w-[100%] h-[55px] rounded-lg bg-transparent border p-5'/>
                     <div className='flex justify-between w-[100%] '>
                        <button onClick={handleProfile}  className="glass w-[40%] p-3 rounded-md font-bold text-yellow-500">{loading?<ButtonLoading bg={{color:"FABD00"}} />:"Save"}</button>
                     </div>
                 </div>
           </div>
        </div>
                )
            }
        </div>
      </div>
    </div>
  )
}

export default FreelancerProfile
