import { useState } from "react"
// interface IFormData {
//   name: string;
//   category: string;
//   description: string; // Fixed typo from "discription"
//   images: string[]; // Array of image URLs or paths
//   basicPrice: number;
//   basicTime: string; // Representing time as a string (e.g., "2 hours")
//   standardPrice: number;
//   standardTime: string;
//   premiumPrice: number;
//   premiumTime: string;
//   searchTags: string[]; // Array of tags
// }
const FreelancerCreateGig = () => {
  const [formData,setFormData] = useState({
    name:"",
    category:"",
    discription:"",
    images:[""],
    basicPrice:0,
    basicTime:"",
    standardPrice:0,
    standardTime:"",
    premiumPrice:0,
    premiumTime:"",
    searchTags:[""]
  })

  const handleOnChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    const {name,value} = event.target;
    setFormData({...formData,[name]:value})
  }
  function addImageInput(){
    setFormData(pre=>({
        ...pre,images:[...pre.images,""]
    }))
  }
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>,index:number) => {
    const updatedImage=[...formData.images];
    updatedImage[index]=event.target.value;
    setFormData((pre)=>({
        ...pre,images:updatedImage
    }))
  }
  function addTagData(){
    setFormData(pre=>({
        ...pre,searchTags:[...pre.searchTags,""]
    }))
  }
  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTag=[...formData.searchTags];
    const index = formData.searchTags.length -1;
    console.log(index)
    updatedTag[index]=event.target.value;
    setFormData((pre)=>({
        ...pre,searchTags:updatedTag
    }))
  }
  const handleOnSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    
  }
  return (
    <div className="w-[100%] flex justify-center ">
      <div className="glass w-[80%] mt-[9rem] p-10 rounded-lg h-[35rem] overflow-scroll scroll-icon-none">
        <form onSubmit={handleOnSubmit} className="flex  " method="post">
          <div className=" space-y-10 flex flex-col w-[50%] ">
            <input type="text" onChange={handleOnChange} placeholder='Gig name' name='name'  className='w-[90%] h-[55px] rounded-lg bg-transparent border p-5'/>
            <input type="text" onChange={handleOnChange} placeholder='Category' name='category'  className='w-[90%] h-[55px] rounded-lg bg-transparent border p-5'/>
            <textarea  onChange={handleOnChange} placeholder="Discription" name="discription" className='w-[90%] h-[55px] rounded-lg bg-transparent border p-5'></textarea>
            {
              formData.images.map((img,index)=>{
                return(
                  <input onChange={(event)=>handleImageChange(event,index)} type="file" placeholder='Images' name='images' value={img}  className='w-[90%] h-[55px] rounded-lg bg-transparent border p-5'/>
                )
              })
            }
            <button onClick={addImageInput} className="glass px-5 p-3 rounded w-[40%]">Add Img</button>
          </div>
          <div className=" space-y-10 w-[50%]">
          <div className="flex justify-between">
            <span className="w-[30%] text-sm">Basic</span>
            <span className="w-[30%] text-sm">Standard</span>
            <span className="w-[30%] text-sm">Premium</span>
          </div>
          <div className="flex justify-between">
            <input onChange={handleOnChange} type="text" placeholder='Price' name='basicPrice'  className='w-[30%] h-[55px] rounded-lg bg-transparent border p-5'/>
            <input onChange={handleOnChange} type="text" placeholder='Price' name='standardPrice'  className='w-[30%] h-[55px] rounded-lg bg-transparent border p-5'/>
            <input onChange={handleOnChange} type="text" placeholder='Price' name='premiumPrice'  className='w-[30%] h-[55px] rounded-lg bg-transparent border p-5'/>
          </div>
          <div className="flex justify-between">
            <input onChange={handleOnChange} type="text" placeholder='Time' name='basicTime'  className='w-[30%] h-[55px] rounded-lg bg-transparent border p-5'/>
            <input onChange={handleOnChange} type="text" placeholder='Time' name='standardTime'  className='w-[30%] h-[55px] rounded-lg bg-transparent border p-5'/>
            <input onChange={handleOnChange} type="text" placeholder='Time' name='premiumTime'  className='w-[30%] h-[55px] rounded-lg bg-transparent border p-5'/>
          </div>
          <input onChange={handleTagChange} type="text" placeholder='Search tags' name='searchTags'  className='w-[100%] min-h-[55px] rounded-lg bg-transparent border p-5'/>
          <button onClick={addTagData} className="glass px-5 p-3 rounded w-[40%]">Add Tag</button>
          <div className="flex space-x-2">
          {
            formData.searchTags.length > 1 && formData.searchTags.map((tag)=>{
                return(
                  <button className="bg-[#aeaeae] p-1 rounded text-xs">{tag}</button>
                )
            })
          }
          </div>
         <div className="flex justify-between">
          <button className="glass text-xl font-bold px-10 p-3 rounded w-[45%] text-yellow-500">Post</button>
          <button className="glass text-xl font-bold px-10 p-3 rounded w-[45%] text-red-500">Cancel</button>
         </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default FreelancerCreateGig
