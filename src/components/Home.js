import React from "react";
import image from "../yellow.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Monstera Leaves"
        className="absolute object-cover w-full h-full"
      />

      

      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 sm:px-0">
        <h1 className="text-6xl text-teal-700 font-bold cursive ">
          Matthew Rhoads
          <br />
          Missoula, MT
          <br />
          Full Stack Developer
          <br />
          Lover of Dogs 
        </h1>
      </section>
    </main>
  );
}
