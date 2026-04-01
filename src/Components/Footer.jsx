import React from 'react';
import { CgInstagram,CgFacebook,CgTwitter } from 'react-icons/cg';

const Footer = () => {
  return (
    <footer className="bg-[#101727] border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-13 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                DigiTools
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
             Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='md:col-span-2'>
            <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
            <div className='flex justify-left gap-5 '>
                <div className='text-white'><CgInstagram /></div>
                <div className='text-white'><CgFacebook /></div>
                <div className='text-white'><CgTwitter /></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>

          <div className="flex gap-6">
            <ul className='flex gap-5'>
                <li>
                    <a>Privacy Policy</a>
                </li>
                <li>
                    <a>Terms of Service</a>
                </li>
                <li>
                    <a>Cookies</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;