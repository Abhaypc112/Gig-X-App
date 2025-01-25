import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { createGig, freelancerGetAllCategory } from "../../redux/slices/freelancer/gigHandleSlice";
import LoadingPage from "../../components/LoadingPage";

const field = {
  gigName: "",
  gigCategory: "",
  gigDescription: "",
  gigPricing: {
    basic: { price: 0 , time: "" },
    standerd: { price: 0, time: "" },
    premium: { price: 0, time: "" },
  },
  searchTags: "",
}

type PricingType = "basic" | "standerd" | "premium";

const FreelancerCreateGig = () => {
  const [gigData, setGigData] = useState({
    gigName: "",
    gigCategory: "",
    gigDescription: "",
    gigPricing: {
      basic: { price: 0 , time: "" },
      standerd: { price: 0, time: "" },
      premium: { price: 0, time: "" },
    },
    searchTags: "",
  });
  const [images, setImages] = useState<File[]>([]);

  const dispatch = useAppDispatch();
  const {loading,categorys} = useAppSelector((state) => state.freelancer.freelancerGigManagement);

  useEffect(()=>{
    dispatch(freelancerGetAllCategory())
  },[dispatch])
  
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setGigData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGigPricing = (
    event: React.ChangeEvent<HTMLInputElement>,
    pricingType: PricingType,
    field: "price" | "time"
  ) => {
    const { value } = event.target;
    setGigData((prevState) => ({
      ...prevState,
      gigPricing: {
        ...prevState.gigPricing,
        [pricingType]: {
          ...prevState.gigPricing[pricingType],
          [field]: field === "price" ? Number(value) : value,
        },
      },
    }));
  };

  const handleSelect = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setGigData({...gigData,gigCategory:event.target.value})
  }
  console.log(gigData)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImages((prevState) => [...prevState, ...filesArray]);
    }
  };

  const handleDeleteImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setImages([])
  }

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const jsonPayload = JSON.stringify({
      gigName : gigData.gigName,
      gigCategory : gigData.gigCategory,
      gigDescription : gigData.gigDescription,
      gigSearchTags : gigData.searchTags,
      gigPricing : gigData.gigPricing
    })
    const formData = new FormData();
    formData.append("data",jsonPayload);
    images.forEach((file) => formData.append("gigImages", file));
    await dispatch(createGig(formData));
    setGigData(field)
    setImages([])
  };
   
  if(loading) {
    return <LoadingPage/>
  }

return (
<div className="w-[100%] flex justify-center ">
  <div className="glass w-[80%] mt-[9rem] p-10 rounded-lg h-[35rem] overflow-scroll scroll-icon-none">
    <form onSubmit={handleOnSubmit} className="lg:flex-row flex flex-col lg:space-y-0 space-y-5" method="post">
      <div className=" space-y-10 flex flex-col lg:w-[50%] items-center">
        <input type="text" onChange={handleOnChange} value={gigData?.gigName} placeholder='Gig name' name='gigName'  className='w-[90%] h-[55px] rounded-lg bg-transparent border p-5'/>
        {/* <input type="text" onChange={handleOnChange} value={gigData?.gigCategory} placeholder='Category' name='gigCategory'  className='w-[90%] h-[55px] rounded-lg bg-transparent border p-5'/> */}
        <select name="" id="gigCategory" onChange={handleSelect} className='w-[90%] bg-transparent h-[55px] border rounded-md px-5'>
        <option value="" className="bg-black">Select Category</option>
          {categorys && categorys.map((category)=>{
            return(
              <option value={category._id} className="bg-black">{category.gigCategory}</option>
            )
          })}
        </select>
        <textarea  onChange={handleOnChange} value={gigData?.gigDescription} placeholder="Discription" name="gigDescription" className='w-[90%] min-h-[205px] rounded-lg bg-transparent border p-5'></textarea>
        <div className='w-[90%] h-[55px] flex items-center justify-between space-x-10'>
          <div className="flex space-x-5 overflow-x-auto scroll-icon-none W-[90%]">
          {
            images?.map((image,index) => {
                return(
                    <img src={URL.createObjectURL(image)} alt={`Uploaded ${index + 1}`} className="w-16 h-14"/>
                )
            })
           }
          </div>
          <button onClick={handleDeleteImage} className="glass min-w-20 h-10 rounded-md">Delete</button>
        </div>
        <input onChange={handleFileChange} type="file" placeholder='Images' name='gigImages' className='w-[90%] h-[55px] rounded-lg bg-transparent border p-5'/>
      </div>
      <div className=" space-y-10 lg:w-[50%] ">
      <div className="flex justify-evenly">
        <span className="w-[25%] text-sm">Basic</span>
        <span className="w-[25%] text-sm">Standard</span>
        <span className="w-[25%] text-sm">Premium</span>
      </div>
      <div className="flex justify-evenly ">
        <input onChange={(event)=>handleGigPricing(event,"basic","price")} value={gigData?.gigPricing.basic.price} type="number" placeholder='Price' name='basicPrice'  className='w-[25%] h-[55px] rounded-lg bg-transparent border p-5'/>
        <input onChange={(event)=>handleGigPricing(event,"standerd","price")} value={gigData?.gigPricing.standerd.price} type="number" placeholder='Price' name='standardPrice'  className='w-[25%] h-[55px] rounded-lg bg-transparent border p-5'/>
        <input onChange={(event)=>handleGigPricing(event,"premium","price")} value={gigData?.gigPricing.premium.price}type="number" placeholder='Price' name='premiumPrice'  className='w-[25%] h-[55px] rounded-lg bg-transparent border p-5'/>
      </div>
      <div className="flex justify-evenly">
        <input onChange={(event)=>handleGigPricing(event,"basic","time")} value={gigData?.gigPricing.basic.time} type="text" placeholder='Time' name='basicTime'  className='w-[25%] h-[55px] rounded-lg bg-transparent border p-5'/>
        <input onChange={(event)=>handleGigPricing(event,"standerd","time")} value={gigData?.gigPricing.standerd.time} type="text" placeholder='Time' name='standardTime'  className='w-[25%] h-[55px] rounded-lg bg-transparent border p-5'/>
        <input onChange={(event)=>handleGigPricing(event,"premium","time")} value={gigData?.gigPricing.premium.time}type="text" placeholder='Time' name='premiumTime'  className='w-[25%] h-[55px] rounded-lg bg-transparent border p-5'/>
      </div>
      <div className="flex justify-center">
        <input onChange={handleOnChange} type="text" value={gigData?.searchTags} placeholder='Search tags' name='searchTags'  className='w-[88%] h-[55px] rounded-lg bg-transparent border p-5'/>
      </div>
     <div className="flex flex-col items-center space-y-10">
      <button className="glass text-xl font-bold px-10 p-3 rounded w-[88%] text-yellow-500">Post</button>
      <button className="glass text-xl font-bold px-10 p-3 rounded w-[88%] text-red-500">Cancel</button>
     </div>
    </div>
    </form>
  </div>
</div>
)
}

export default FreelancerCreateGig
