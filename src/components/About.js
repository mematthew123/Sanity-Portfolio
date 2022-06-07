import React from 'react'
import image from '../matt-bernie.jpg'

export default function About() {
  return (
    <div className="bg-black min-h-screen p-12">
      <div className="dark:bg-gray-900">
        <div className="container mx-auto py-9 md:py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
            <div className="lg:w-4/12 flex justify-center items-center">
              <div>
                <h1 className="dark:text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-white w-7/12">
                 About me 
                </h1>
                <p className="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-white">
                  I am experienced in Javascript, Java, Reactjs, Shopify, Wordpress and Next js. I take pride in
                  my work and always strive to deliver a high quality product. I have a passion for
                  learning new things and I am always looking to improve my skills. I enjoy writing and being part of the open source community.
                </p>
                <p className="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-white">
                  When not in front of a computer, you can usually find me spending time along the
                  Clark Fork river or in the mountains. 🏔 🐶 
                </p>
              </div>
            </div>
            <div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
              <div className="relative w-full h-full">
                <img src={image} className="w-full h-full relative hidden lg:block" />
                <img src={image} className="w-full h-full lg:hidden sm:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
