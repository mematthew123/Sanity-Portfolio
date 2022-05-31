import React from 'react'
import { SocialIcon } from "react-social-icons";
import Skills from './Skills';
import Footer from './Footer';

export default function Home() {
  return (
    <main className="container mx-auto bg-black text-white min-h-screen min-w-full pt-12 ">
      <div className="flex flex-col md:flex-row justify-center p-6 ">
        <div className=" justify-center">
          <h1 className="text-5xl font-bold leading-none mb-2 justify-center mt-32 sm:mt-20">
            Hello, I'm <span className="text-blue-500">Matthew</span>
          </h1>
          <p className=" text-3xl"> Full Stack Developer.</p>
          <p className="text-2xl">Missoula, MT </p>
          <SocialIcon
            url="https://linkedin.com/in/mematthew123"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
               <SocialIcon
            url="https://github.com/mematthew123"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          
        </div>
        

      
      </div>
    </main>
  );
}

  
 