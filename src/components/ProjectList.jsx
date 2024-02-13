import React from 'react'

export default function ProjectList({projects}) {
  return (
    <div className='projects'>
        {projects.map((el, index) => (
            <div className='project' key={index}>
                <img src={el.img} alt="project" />
            </div>
        ))}
    </div>
  )
}
