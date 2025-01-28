import { useState } from "react";
// import { IUser } from "../../interface/userInterface";

// interface updateProfile {
//     freelancer:IUser;
//     field:string;
//     handleModal:()=> void;
// }

const FreelancerProfilUpdate = (data : any) => {
    const [editUser,setEditUser] = useState("");
    console.log(data)
    return (
        <div className="flex justify-center w-[100%]">
          <div className="fixed w-[50%] h-[20rem] bg-black z-10 flex flex-col justify-between py-10 rounded">
                 <div className="flex justify-between px-10">
                     <h1 className="text-xl font-bold">Edit {data.field}</h1>
                     <button onClick={data.handleModal} className="glass px-5 p-3 rounded-md font-bold text-xs">Cancel</button>
                 </div>
                 <div className="flex flex-col justify-between items-center space-y-10">
                     <input onChange={(e)=>setEditUser(e.target.value)} type="text" value={editUser} placeholder='Enter' name={data.field}  className='w-[90%] h-[55px] rounded-lg bg-transparent border p-5'/>
                     <button  className="glass px-20 p-3 rounded-md font-bold text-yellow-500">Save</button>
                 </div>
           </div>
        </div>
       )
}

export default FreelancerProfilUpdate
