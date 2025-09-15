import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({project}){
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{project.description}</p>
      <div className="mt-4 flex gap-2">
        <Link to={`/projects/${project.id}`} className="px-3 py-1 bg-primary text-white rounded">Details</Link>
        <a href={project.link} target="_blank" rel="noreferrer" className="px-3 py-1 bg-accent text-white rounded">Live</a>
      </div>
    </div>
  )
}
