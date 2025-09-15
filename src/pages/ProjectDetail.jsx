import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../sample-data/data'
export default function ProjectDetail(){
  const { id } = useParams()
  const project = projects.find(p=> String(p.id)=== id)
  if(!project) return <div>Not found</div>
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded mt-4" />
      <p className="mt-4">{project.description}</p>
      <a href={project.link} target="_blank" rel="noreferrer" className="text-accent mt-4 inline-block">Open Live</a>
    </div>
  )
}
