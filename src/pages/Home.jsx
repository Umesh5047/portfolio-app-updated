import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../sample-data/data'
export default function Home(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(p=> <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  )
}
