import React from "react";
import image from "/Users/matthew/Documents/GitHub/Sanity-Portfolio/src/guy.jpg";



export default function About() {

  return (
<div className="bg-black min-h-screen p-12">
<div className="dark:bg-gray-900">
  <div className="container mx-auto py-9 md:py-12 lg:py-24">
    <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
      <div className="lg:w-4/12 flex justify-center items-center">
        <div>
          <h1 className="dark:text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-white w-7/12">Who am i ...?</h1>
          <p className="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
        </div>
      </div>
      <div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
        <div className="relative w-full h-full">
          <img src={image}className="w-full h-full relative hidden lg:block" />
          <img src={image} className="w-full h-full lg:hidden sm:hidden" />
           
          </div>
      
      </div>
    </div>
  </div>
  </div>
</div>
  );
}
