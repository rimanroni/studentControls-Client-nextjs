"use client"

import axios from "axios";
import Swal from "sweetalert2";

const StudentAddpage = () => {
 const handleForm = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const nid = form.nid.value;
    const father = form.father.value;
    const mother = form.mother.value;
    const reg = form.reg.value;
    const roll = form.roll.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const student = {name, nid, father, mother, reg, roll, phone, email, photo};
    axios.post('http://localhost:5000/student', student)
    .then(res=>{
         const id = res.data.insertedId;
         if(id){
            Swal.fire({
                icon: "success",
                title: "Student Add Successfully",
                text: "Student Add Sucess",
               });
               form.reset()
         }
    }) 
    .catch(error=>{
        console.log(error)
    })

 }
    return (
        <div className='flex flex-col justify-center items-center mx-8    bg-blue-600 mt-5 rounded-md'>
            <div className='  w-full p-8 flex flex-col gap-y-3  '>
            <h1 className='text-center text-4xl font-bold '>Add Student </h1>
            <form onSubmit={handleForm} className='w-full  flex flex-col gap-4'>
                <div className=' flex flex-col lg:flex-row gap-2 w-full'>
                    <input type="text" name="name" required className='lg:w-1/2 w-full font-bold  outline-none text-black p-3 rounded-md' placeholder='Student Name ' /> 
                    <input type="text" required className='lg:w-1/2 w-full font-bold  outline-none text-black p-3 rounded-md' placeholder='Student NID' name="nid" />
                </div>
                <div className=' flex flex-col lg:flex-row gap-2 w-full'>
                    <input type="text" required className='lg:w-1/2 w-full font-bold  outline-none text-black p-3 rounded-md' placeholder='Father Name ' name="father" /> 
                    <input type="text" required className='lg:w-1/2 w-full font-bold outline-none text-black p-3 rounded-md' placeholder='Mother  Name' name="mother" />
                </div>
                <div className=' flex flex-col lg:flex-row gap-2 w-full'>
                    <input type="text" required className='lg:w-1/2 w-full font-bold  outline-none text-black p-3 rounded-md' placeholder='Reg Number ' name="reg" /> 
                    <input type="text" required className='lg:w-1/2 w-full font-bold outline-none text-black p-3 rounded-md' placeholder='Class Roll' name="roll" />
                </div>
                <div className=' flex flex-col lg:flex-row gap-2 w-full'>
                    <input type="number" required className='lg:w-1/2 w-full font-bold  outline-none text-black p-3 rounded-md' placeholder='Mobile Number ' name="phone"/> 
                    <input type="email" required className='lg:w-1/2 w-full font-bold outline-none text-black p-3 rounded-md' placeholder='Email' name="email" />
                </div>
                <div className=' flex flex-col lg:flex-row gap-2 w-full'>
                    <input type="text" required className=' text-center  w-full font-bold  outline-none text-black p-3 rounded-md' placeholder='Photo URL ' name="photo" /> 
                    
                </div>
               <div className='flex justify-center items-center'>
               <button className='bg-lime-400 hover:bg-blue-700 hover:text-white duration-300 rounded-md px-8 py-2 font-bold text-blue-600'>Add Student</button>
               </div>
            </form>
            </div>
        </div>
    );
};

export default StudentAddpage;