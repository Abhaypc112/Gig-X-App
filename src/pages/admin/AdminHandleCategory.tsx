import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { adminAddCategory, adminDeleteCategory, adminEditCategory, adminGetAllCategory } from "../../redux/slices/admin/menageCategorySlice";
import { ICategory } from "../../interface/categoryInterface";
import ButtonLoading from "../../components/buttonLoading";

const AdminHandleCategory = () => {
 const dispatch = useAppDispatch();
    const {categorys,loading} = useAppSelector((state)=>state.admin.adminCategoryManagement);
    const [filter, setFilter] = useState<boolean | null>(null);
    const [filteredData,setFilteredData] = useState(categorys);
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryData,setCategory] = useState("");
    const [categoryImage,setCategoryImage] = useState <File[]> ([]);
    const [stringImg,setStringImg] = useState ("");
    const [editId,setEditId] = useState <string | null> (null);
    const [showModal,setShowModal] = useState(false);
    
      console.log(categorys)
    useEffect(()=>{
       let result = categorys;
 
       if(filter !== null){
          result = result.filter((category)=> category.isActive === filter)
       }
 
       if(searchTerm.trim() !== ""){
          result = result.filter((category)=>
            category?.gigCategory?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
       }
       setFilteredData(result);
    },[categorys,filter,searchTerm])

    useEffect(()=>{
      if(editId){

      }
    })

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        setCategoryImage([file]);
        setStringImg("")
      }
    };

    const handleOnSubmit = async () => {
      const formData = new FormData();
      formData.append('gigCategory',categoryData);
      formData.append("image", categoryImage[0]);
      await dispatch(adminAddCategory(formData))
      setCategory('');
      setCategoryImage([]);
      setShowModal(false)
    }
    const handleOnSave = async() => {
      const formData = new FormData();
      formData.append('gigCategory',categoryData)
      formData.append("_id", editId!);
      formData.append("image", categoryImage[0]);
      console.log(formData)
      await dispatch(adminEditCategory(formData))
      setCategory('');
      setCategoryImage([]);
      setShowModal(false)
    }
    const handleEdit = async (category : ICategory) => {
      setShowModal(true)
      const {_id} = category;
      setEditId(_id)
      setCategory(category.gigCategory);
      console.log(category.image)
      setStringImg(category.image);
    }

    const handleDelete = async (categoryId : string) => {
      const userConfirmed = window.confirm("Are you sure to delete ?");
      if(userConfirmed){
         await dispatch(adminDeleteCategory(categoryId))
      }
    }
    const handleStatus = async (categoryStatus : boolean, categoryId: string) => {
      const currentStatus = JSON.stringify(!categoryStatus)
      const formData = new FormData();
      formData.append('isActive',currentStatus)
      formData.append("_id", categoryId);
      await dispatch(adminEditCategory(formData))
   
    }

 
    useEffect(()=>{
      dispatch(adminGetAllCategory());
    },[dispatch])
 
   return (
     <div>
       <div className=" flex flex-col min-h-screen p-5 space-y-6">
       <div className="top-side flex justify-between mt-[8rem] lg:ml-[20rem] lg:mr-[3rem] relative">
         <div className="options w-[100%] space-x-5 font-bold">
             <button onClick={()=>setFilter(null)} className={filter === null ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>ALL</button>
             <button onClick={()=>setFilter(true)} className={filter === true ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>ACTIVE</button>
             <button onClick={()=>setFilter(false)} className={filter === false ? "glass px-5 p-3 rounded-md text-xs":"glass-btn px-5 p-3 rounded-md text-xs"}>INACTIVE</button>
             <button className="glass-btn px-5 p-3 rounded-md text-xs">BTN</button>
         </div>
         <div className="search flex space-x-3 h-10">
             <button onClick={()=>setShowModal(true)} className="glass-btn w-36 px-5 p-3 rounded-md text-xs text-yellow-500 font-bold">Create Category</button>
             <input onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search" className="bg-transparent glass border-none focus:outline-none p-2 rounded-md " />
         </div>
       </div>
       <div className="bottum-side  lg:ml-[20rem] lg:mr-[3rem] space-y-5">
           {
            showModal && (
               <div className=" z-10 lg:w-[70%] w-[90%] h-[50%] lg:h-[30%] bg-black p-10 fixed rounded flex justify-center items-center">
           <div className="table-heading w-[100%] glass h-[100%] lg:h-14 rounded-md flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between px-5 items-center">
              <input onChange={(e)=>setCategory(e.target.value)} value={categoryData} type="text" className='w-[30%] h-[45px] rounded-lg bg-transparent focus:outline-none' placeholder="Enter Category"/>
               <div className="flex space-x-3 items-center">
                  {
                    (categoryImage.length>0 || stringImg) && <img src={stringImg?stringImg:URL.createObjectURL(categoryImage[0])} alt="category-image" className="w-14 h-12 rounded"/>
                  }
                  <input onChange={handleFileChange} type="file" />
               </div>
              {
               editId?( 
                  <button onClick={handleOnSave}className="bg-yellow-500 w-20 p-1 px-3 rounded text-black">{loading?<ButtonLoading/>:"Save"}</button>
               ):(
                  <button onClick={handleOnSubmit}className="bg-yellow-500 w-20 p-1 px-3 rounded text-black">{loading?<ButtonLoading/>:"Create"}</button>
               )
              }
              <button onClick={()=>setShowModal(false)} className=" glass p-1 px-3 rounded">Cancel</button>
           </div>
           </div>
            )
           }
           <div className="table-heading w-[100%] glass h-14 rounded-md">
              <tr className="w-[100%] flex  items-center h-14 px-5 text-center">
                 <td className="w-[20%] font-bold">IMAGE</td>
                 <td className="w-[30%] font-bold">CATEGORY</td>
                 <td className="w-[20%] font-bold">STATUS</td>
                 <td className="w-[20%] font-bold">EDIT</td>
                 <td className="w-[20%] font-bold">DELETE</td>
              </tr>
           </div>
           {
             filteredData?.map((category)=>{
                return(
                <div className="table-data w-[100%] border border-gray-400 h-20 md:h-14 rounded-md flex items-center">
                   <tr className="w-[100%] flex items-center h-14 px-5">
                      <td className="w-[20%]"><img src={category.image} alt="" className="bg-black w-14 h-10 rounded"/></td>
                      <td className="w-[30%] text-center">{category.gigCategory}</td> 
                      <td onClick={()=>handleStatus(category.isActive!,category._id)} className="w-[20%] text-center"><button className={category.isActive?"bg-[#13a14c]  p-1 rounded-sm md:w-[5rem]":"bg-[#a11313]  p-1 rounded-sm w-[5rem]"}> {category.isActive?"Active":"Inactive"} </button></td>
                      <td onClick={()=>handleEdit(category)} className="w-[20%] text-center"><button className="rounded glass p-1 w-[5rem]">Edit</button></td>
                      <td onClick={()=>handleDelete(category._id)} className="w-[20%] text-center"><button className="rounded glass p-1 w-[5rem]">Delete</button></td>
                    </tr>
                </div>
                )
             })   
           }
         
       </div>
     </div>
     </div>
   )
}

export default AdminHandleCategory
