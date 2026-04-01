import React from 'react';

const Banner2 = () => {
    return (
       <div className='bg-violet-600 mx-auto p-2 md:flex justify-center'>
         <div className=' md:flex items-center justify-around p-10 lg:w-6xl'>
            <div className='text-white md:border-r border-white pr-10'>
                <h1 className='text-4xl font-bold'>50k+</h1>
                <p>Active Users</p>
            </div>
            <div className='text-white'>
                <h1 className='text-3xl font-bold'>50k+</h1>
                <p>Active Users</p>
            </div>
            <div className='text-white md:border-l border-white pl-10'>
                <h1 className='text-3xl font-bold'>50k+</h1>
                <p>Active Users</p>
            </div>
        </div>
       </div>
    );
};

export default Banner2;