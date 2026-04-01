import React from 'react';

const Banner2 = () => {
    return (
       <div className='bg-violet-700 mx-auto p-2 md:flex justify-center text-center'>
         <div className=' md:flex items-center justify-around p-15 lg:w-6xl'>
            <div className='text-white mb-2  '>
                <h1 className='text-4xl font-bold'>50k+</h1>
                <p>Active Users</p>
            </div>
            <div className='hidden md:flex h-30 w-px bg-white'></div>
            <div className='text-white mb-2'>
                <h1 className='text-3xl font-bold'>200+</h1>
                <p>Premium Tools</p>
            </div>
             <div className='hidden md:flex h-30 w-px bg-white'></div>
            <div className='text-white  '>
                <h1 className='text-3xl font-bold'>4.9</h1>
                <p>Rating</p>
            </div>
        </div>
       </div>
    );
};

export default Banner2;