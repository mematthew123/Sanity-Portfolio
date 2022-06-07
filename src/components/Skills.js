import React, { useEffect, useState } from 'react'
import sanityClient from '../client.js'

function Skills() {
  const [skillsData, setSkillsData] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skills"]{
        title,
            
        description,
      
        logos
      }`
      )
      .then((data) => setSkillsData(data))
      .catch(console.error)
  }, [])

  return (
    <main className="bg-black min-h-screen p-12">
      <section className="container mx-auto flex-row justify-center ">
        <h1 className="text-5xl text-white flex justify-center cursive">Skills</h1>

        <section className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillsData &&
            skillsData.map((skills, index) => (
              <div className=" text-center flex-wrap relative rounded-lg shadow-xl bg-white p-6">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-7001">
                  <a
                    href={skills.link}
                    alt={skills.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {skills.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4"></div>
              </div>
            ))}
        </section>
      </section>
    </main>
  )
}
export default Skills