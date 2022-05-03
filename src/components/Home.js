import React from "react";
import image from  '../riverRock.jpg'

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="River Rock"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center top-60">
        <h1 className="text-6xl text-white  ">
        What Up!? 
        </h1>
      </section>
    </main>
  );
}