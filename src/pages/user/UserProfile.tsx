import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { editUser, getUser } from "../../redux/slices/user/profileSlice";
import ButtonLoading from "../../components/ButtonLoading";
import moment from "moment";


const UserProfile = () => {
  const {user,loading} = useAppSelector((state)=>state.user.userProfile);
  const dispatch = useAppDispatch();
  const [editId,setEditId] = useState(false);
  const [profileData,setProfileData] = useState({name:"",profileImg:""});
  const [image,setimage] = useState <File[]> ([]);

  useEffect(()=>{
    dispatch(getUser())
  },[dispatch,editId])

  useEffect(()=>{
    if(user){
      setProfileData({name:user.name!,profileImg:user.profileImg!})
    }
  },[user])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        setimage([file]);
        setProfileData({...profileData,profileImg:""})
      }
};


const handleEditUser = async () => {
  const formData = new FormData();
  formData.append("name",profileData.name);
  formData.append("profileImg", image[0]);
  await dispatch(editUser(formData));
  setProfileData({name:"",profileImg:""});
  setEditId(false)
}

  return (
    <div className="w-[100%] flex justify-center items-center h-screen">
      <div className="glass rounded-md h-[30rem] flex flex-col items-center p-10 space-y-2  w-[30rem] mt-10">
                  {

                      (image.length > 0 || profileData.profileImg ) &&<img src={profileData.profileImg?profileData.profileImg:URL.createObjectURL(image[0])} alt="profile"  className='w-24 h-24 rounded-full relative bg-slate-500'/>
                  }
                      {
                        editId && (<input onChange={handleFileChange} type="file" />)
                      }
                      <h1 className='font-bold'></h1>
                      <div className=' space-y-2 '>
                          <div  className='flex flex-col justify-center items-center gap-3  text-sm' ><span className='font-bold'>Member since</span> {moment(user.createdAt).format("DD-MMM-YYYY").toUpperCase()} <span className='text-[#A9A9A9]'></span></div>
                      </div>
                      <div className="w-full flex flex-col items-center gap-3">
                        <div className="w-[90%]"><label htmlFor="name">Name</label></div>
                        {
                          editId ? (
                            <>
                              <input onChange={(e)=>setProfileData({...profileData,name:e.target.value})} type="text"   value={profileData.name} name='name'  className='w-[90%] h-[55px] rounded-lg bg-transparent border p-5'/>
                               <div className="flex justify-between w-[90%] gap-5">
                                  <button onClick={handleEditUser} className="glass text-xl font-bold px-10 p-3 rounded w-[50%] text-red-500">{loading?<ButtonLoading bg={{color:"FABD00"}}/>:"Save"}</button>                            
                                  <button onClick={()=>setEditId(false)} className="glass text-xl font-bold px-10 p-3 rounded w-[50%] text-red-500">Cancel</button>   
                               </div>                         
                            </>
                          ):(
                            <>
                                <input type="text"   value={profileData.name} name="name"  className='w-[90%] h-[55px] rounded-lg bg-transparent border p-5' disabled/>
                                <button onClick={()=>setEditId(true)} className="glass text-xl font-bold px-10 p-3 rounded w-[90%] text-red-500">Edit</button>                            
                            </>
                          )
                        }
                      </div>
                  </div>
    </div>
  )
}

export default UserProfile
