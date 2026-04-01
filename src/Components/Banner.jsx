import { Target } from 'lucide-react';
import { Play } from 'lucide-react';
import React from 'react';

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden p-4">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-600 text-sm font-medium px-5 py-2 rounded-full">
           <Target/>   New Ai-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
           Supercharge Your <br />Digital Workflow
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className='btn bg-violet-700 text-white rounded-4xl'>Explore Products</button>
            <button className='btn border border-violet-600 text-violet-600 rounded-4xl'><Play /> Watch Demo</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl"
              src="/src/assets/banner.png"
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;