import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="md:flex items-center justify-between shadow-sm bg-base-100 py-5 md:px-30">
      <div >
        <h1 className='text-3xl font-bold text-violet-700 text-center py-2'>DigiTools</h1>
      </div>
      <div className=" hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
            </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div><a><ShoppingCart /></a></div>
        <button className='btn  bg-white border-0'>Login</button>
        <button className='btn btn-primary rounded-4xl'>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;