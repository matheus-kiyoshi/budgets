'use client'
import LinkButton from '../components/Home/LinkButton'
import ProjectCard from '../components/Home/project/ProjectCard'
import { Project } from '../components/Home/project/ProjectType'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import '@/app/globals.css'
import Message from '../components/Home/Message'

export default function Projects() {
  const [message, setMessage] = useState('')
  const projects: Project[] =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('projects') || '[]')
      : []
  const router = useRouter()

  const HandleRemoveProject = (id: number) => {
    const projects = JSON.parse(localStorage.getItem('projects') || '[]')
    const newProjects = projects.filter((project: Project) => project.id !== id)
    localStorage.setItem('projects', JSON.stringify(newProjects))
    setMessage('Projeto removido com sucesso!')

    router.refresh()
  }

  return (
    <main className="grid-area-main flex flex-col gap-8 my-10 justify-start items-center">
      {message && <Message type="success" msg={message} />}
      <div className="w-5/6 flex justify-between items-center">
        <h1 className="text-5xl">Meus Projetos</h1>
        <LinkButton pageDirectory="/newproject" text="Criar Projeto" />
      </div>
      <div className="w-5/6 flex flex-wrap">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={HandleRemoveProject}
            />
          ))}
        {projects.length === 0 && <p>Não há projetos cadastrados!</p>}
      </div>
    </main>
  )
}
