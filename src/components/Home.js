import React from 'react'
import Project from './Project'
import { SocialIcon } from 'react-social-icons'

export default function Home() {
  return (
    <main className=" flex justify-center container mx-auto bg-black text-white min-h-screen min-w-full">
      <div className="flex flex-col md:flex-row justify-center p-6 ">
        <div className=" justify-center">
          <h1 className="text-5xl font-bold leading-none mb-2 justify-center mt-32 sm:mt-20">
            Hello, I'm <span className="text-blue-500">Matthew</span>
          </h1>
          <p className="text-xl">I'm a Full Stack Developer.</p>
          <p className="text-xl">Missoula, MT </p>
          <p className="text-xl">Thanks for checking out my site </p>
        </div>
        <SocialIcon
          url="https://linkedin.com/in/mematthew123"
          className="flex rounded-full mr-2 row-2 "
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://github.com/mematthew123"
          className="flex rounded-full mr-2 row-2 "
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </div>
    </main>
  )
}
