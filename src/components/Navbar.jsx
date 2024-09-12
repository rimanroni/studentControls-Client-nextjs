import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
    const navItems = [
      {
        name:"Add Student", 
        path:"addStudent",
       },
       {
        name:"View Student",
        path:"viewStudent"
       },
        
    ]
    return (
        <div className='max-w-6xl mt-2 mx-auto flex items-center py-4 justify-between px-6 rounded-full bg-blue-600'>
            <div>
               <Link href={'/'} className='font-bold '>LOGO </Link>
            </div>
            <div className='flex justify-between gap-x-4'>
                {navItems.map((item, indx)=>(
                    <Link href={item.path} className='font-bold' key={indx}>{item.name}</Link>
                ))}
            </div>
            <Link className='text-xl font-bold' href={'https://github.com/rimanroni'} target='_blank'><FaGithub/></Link>
        </div>
    );
};

export default Navbar;