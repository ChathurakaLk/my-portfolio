import React from 'react'
import { projects } from '@/data'
import { HoverEffect } from './ui/card-hover-effect'

const RecentProject = () => {
  return (
         <div id='projects' className="py-20 w-full relative">
      <h1 className="text-center text-3xl lg:text-5xl font-bold tracking-wide text-blue-100 w-full mx-auto mb-10">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <HoverEffect
      items={projects}/>
      </div>
  )
}

export default RecentProject