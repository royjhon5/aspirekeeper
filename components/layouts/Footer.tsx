import { Facebook, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className='bg-stone-50 pt-44 pb-24'>
        <div className='max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4'>
            <div className='row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start'>
                <p className="mb-4">
                <strong className="font-medium">Aspire Keeper Solutions</strong><br/> is a private
                virtual network that has unique features and has high security.
                </p>
                <div className="flex w-full mt-2 mb-8 -mx-2">
                    <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer">
                    <Facebook />
                    </div>
                    <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer">
                    <Twitter />
                    </div>
                    <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer">
                    <Linkedin />
                    </div>
                </div>
                <p className="text-gray-400">Copyright ©{new Date().getFullYear()} - Aspire Keeper Solutions 2025 | All Rights Reserved
                </p>
            </div>
            <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Quick Links</p>
                <ul className="text-black-500 ">
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                    Home {" "}
                    </li>
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                    Services {" "}
                    </li>
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                    About {" "}
                    </li>
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                    Pricing {" "}
                    </li>
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                    Blog {" "}
                    </li>
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                    Contact{" "}
                    </li>
                </ul>
            </div>
            <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
                <p className="text-black-600 mb-4 font-medium text-lg">Privacy Policy | Terms & Conditions</p>
                <ul className="text-black-500">
                   
                </ul>
            </div>
        </div>  
    </div>
  );
};

export default Footer;