"use client"

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState  } from "react";
import { FaRegEdit } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

 

const ViewAllStudent = () => {
    
 const [data, setData] = useState([]);
//  get all student data 
 useEffect(()=>{
    axios.get('http://localhost:5000/student')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))

 },[])
//  delete student 
 const studentDelete = (id) =>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:5000/student/${id}`)
            .then(res=>{
                const deletedCount = res.data.deletedCount;
                if(deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                   const newStudent = data.filter(item=>item._id !== id);
                   setData(newStudent)
       
                }
            })
            .catch(err=>console.log(err))
          
        }
      });



    
 }



 const handleRedirect = () => {
    alert('development comming soon!')
  };

    return (
        <div className="mt-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 gap-5">
             {data.map((item, indx)=>(
                <div key={indx} className="bg-[#FF3811] p-5 flex flex-col rounded-md  gap-y-5  ">
                <div>
                  <Image  src={item.photo} alt="" width={200} height={200} className="w-[100px] h-[100px] border-2 object-contain mx-auto rounded-full"/>
                </div>
                <div className="font-semibold flex flex-col justify-center items-center">
                <h1 className="text-center">Student : {item.name}</h1>
                <div className=" ">
                <h1>Reg : {item.reg}</h1>
                <h1>Roll : {item.roll}</h1>
                </div>
                <div className="flex flex-col justify-center ">
                <h1 className="text-center">Phone: {item.phone}</h1>
                <h1>Email : {item.email}</h1>
                </div>
                </div>
                <div className="flex justify-center gap-5 items-center text-2xl">
                    <Link href={'/updateStudent'}><FaRegEdit /></Link>
                    <button onClick={handleRedirect } ><BsFillEyeFill/></button>
                    <button onClick={()=>studentDelete(item._id)}><MdDelete/></button>
                </div>
              </div>
             ))}
        </div>
    );
};

export default ViewAllStudent;