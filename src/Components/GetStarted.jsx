import React from 'react';

const GetStarted = () => {
    return (
        <div className='mx-auto text-center my-10'>
           <div className='p-10 text-center'>
             <h1 className='text-5xl font-bold'>Get Started In 3 Steps</h1>
            <p className='my-5'>Start using premium digital tools in minutes, not hours.</p>
           </div>

           {/* cards */}

           <div className='md:flex justify-center gap-10'>
            {/* card-1  */}
                <div className='max-w-70 p-4 shadow-2xl m-5'>
            <div className='flex justify-end mb-2'>
                <h3 className='bg-violet-600 text-white w-6 rounded-full'> 1 </h3>
            </div>
            <div className=' flex flex-col items-center mb-7'>
                    <div className='mb-2'><img src="/assets/user.png" alt="" /></div>
            <div>
                <h1 className='text-2xl font-bold mb-2'>Create Account</h1>
                <p>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            </div>
           </div>
           {/* card-2  */}
                <div className=' max-w-70 p-4 shadow-2xl m-5'>
            <div className='flex justify-end mb-2'>
                <h3 className='bg-violet-600 text-white w-6  rounded-full'> 1 </h3>
            </div>
            <div className=' flex flex-col items-center mb-7'>
                    <div className='mb-2'><img src="/assets/package.png" alt="" /></div>
            <div>
                <h1 className='text-2xl font-bold mb-2'>Create Account</h1>
                <p>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            </div>
           </div>
           {/* card -3  */}
                <div className='max-w-70 p-4 shadow-2xl m-5'>
            <div className='flex justify-end mb-2'>
                <h3 className='bg-violet-600 text-white w-6  rounded-full'> 1 </h3>
            </div>
            <div className=' flex flex-col items-center mb-7'>
                    <div className='mb-2'><img src="/assets/rocket.png" alt="" /></div>
            <div>
                <h1 className='text-2xl font-bold mb-2'>Create Account</h1>
                <p>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            </div>
           </div>
           </div>
        </div>
    );
};

export default GetStarted;