"use client"
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
 

const InfoStudent = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        // axios.get('')
    },[])
     
    return (
        <div className='max-w-6xl mx-auto mt-7 bg-purple-600 rounded-md p-7'>
           <div>
             <Image  alt='student img' width={400} height={400} className='border-2 rounded-md border-white'/>
           </div>
        </div>
    );
};

export default InfoStudent;