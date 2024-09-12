import Link from 'next/link';
import React from 'react';

const NotfoundPages = () => {
    return (
        <div>
            <div className='max-w-5xl mx-auto bg-blue-500 p-12  rounded-full mt-12 overflow-hidden flex flex-col justify-center items-center '>
              <p  className='text-3xl font-bold '>404 || Pages Not Found </p>
              <Link href={'/'} className='px-8 mt-5 rounded-md hover:bg-black hover:border-white duration-300  py-2 border-[2px] border-purple-500'>Go Back</Link>
            </div>
        </div>
    );
};

export default NotfoundPages;