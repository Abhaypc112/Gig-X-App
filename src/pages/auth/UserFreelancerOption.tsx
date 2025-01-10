import { SiFreelancer } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserFreelancerOption = () => {
  const [option,setOption] = useState("");
  const navigate = useNavigate();
  const selectOption = () => {
    navigate(`/${option}/signup`)
  }
  return (
    <div className="min-h-screen flex-col flex justify-center items-center space-y-5">
      <div className=" flex-col flex md:flex-row md:space-x-10 space-y-10 md:space-y-0">
      <div className="w-[379px] h-[187px] glass rounded-md">
         <div className="flex justify-between p-5">
          <FaUser className="w-10 h-10"/>
          <input name="option"  onChange={()=>setOption("user")} type="radio" className="w-7 h-7"/>
         </div>
         <div className="text-2xl p-5">
         I’m a client, hiring for a project
        </div>
      </div>
      <div className="w-[379px] h-[187px] glass rounded-md">
        <div className="flex justify-between p-5">
          <SiFreelancer className="w-10 h-10"/>
          <input name="option" onChange={()=>setOption("freelancer")} type="radio" className="w-7 h-7"/>
        </div>
        <div className="text-2xl p-5">
          I’m a freelancer, looking for work
        </div>
      </div>
    </div>
      <button onClick={selectOption} className="glass p-2 w-16 rounded-md">Next </button>
    </div>
  )
}

export default UserFreelancerOption
