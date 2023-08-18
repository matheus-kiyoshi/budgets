'use client'
import LinkButton from '../components/Home/LinkButton'
import ProjectCard from '../components/Home/project/ProjectCard'
import { Project } from '../components/Home/project/ProjectType'

export default function Projects() {
  const projects: Project[] = JSON.parse(
    localStorage.getItem('projects') || '[]',
  )

  const HandleRemoveProject = (id: number) => {
    const projects = JSON.parse(localStorage.getItem('projects') || '[]')
    const newProjects = projects.filter((project: Project) => project.id !== id)
    localStorage.setItem('projects', JSON.stringify(newProjects))
  }

  return (
    <div className="p-8 w-full min-h-[75vh]">
      <div className="flex justify-between mb-8">
        <h1 className="text-5xl">Meus Projetos</h1>
        <LinkButton pageDirectory="/newproject" text="Criar Projeto" />
      </div>
      <div className="w-full h-[75%] grid grid-cols-4 gap-5">
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
    </div>
  )
}
