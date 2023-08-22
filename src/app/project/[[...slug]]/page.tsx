'use client'
import ProjectForm from '@/app/components/Home/project/ProjectForm'
import { Project, Service } from '@/app/components/Home/project/ProjectType'
import ServiceCard from '@/app/components/Home/service/ServiceCard'
import ServiceForm from '@/app/components/Home/service/ServiceForm'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Project({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project>({} as Project)
  const [services, setServices] = useState<Service[]>([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('projects') || '[]')
    const selectedProject = projects.find(
      (project: Project) => project.id === Number(params.slug),
    )
    setProject(selectedProject as Project)
    setServices(selectedProject?.services || [])
  }, [params.slug])

  function createService(projectData: Project) {
    const id =
      projectData.services.length > 0
        ? projectData.services[projectData.services.length - 1].id + 1
        : 1
    projectData.services[projectData.services.length - 1].id = id
    const lastService = projectData.services[projectData.services.length - 1]
    const lastServiceCost = lastService.cost
    const newCost = Number(projectData.cost) + Number(lastServiceCost)

    if (newCost > project.budget) {
      const updatedServices = [...projectData.services]
      updatedServices.pop()
      projectData = { ...projectData, services: updatedServices }
    } else {
      projectData = { ...projectData, cost: newCost }
    }

    // update projects
    setProject({ ...projectData })

    const projects = JSON.parse(localStorage.getItem('projects') || '[]')
    const projectIndex = projects.findIndex(
      (p: Project) => p.id === projectData.id,
    )

    if (projectIndex !== -1) {
      projects[projectIndex] = projectData
      localStorage.setItem('projects', JSON.stringify(projects))
    }

    router.refresh()
  }

  function removeService(id: number, cost: number) {
    console.log(project)
    const updatedServices = project.services.filter(
      (service: Service) => service.id !== id,
    )
    const updatedCost = project.cost - cost

    const updatedProject: Project = {
      ...project,
      services: updatedServices,
      cost: updatedCost,
    }
    setProject(updatedProject)

    // update projects
    const projects = JSON.parse(localStorage.getItem('projects') || '[]')
    const projectIndex = projects.findIndex(
      (p: Project) => p.id === updatedProject.id,
    )

    if (projectIndex !== -1) {
      projects[projectIndex] = updatedProject
      localStorage.setItem('projects', JSON.stringify(projects))
    }
    setServices(updatedServices)

    router.refresh()
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  return (
    <main className="grid-area-main">
      <div className="w-5/6 flex flex-col justify-start mx-auto my-0 flex-wrap p-8">
        <div className="border-b-zinc-800 border-b mb-5 pb-5 flex justify-between flex-wrap">
          <h1 className="mb-2 bg-zinc-800 text-yellow-400 p-2 text-4xl">
            Projeto: {project.name}
          </h1>
          <button
            onClick={toggleProjectForm}
            className="bg-zinc-800 text-white px-4 py-2 butao hover:text-yellow-400 cursor-pointer max-h-10"
          >
            {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
          </button>
          {!showProjectForm ? (
            <div className="mb-1 mt-4 pb-1 pt-2 flex justify-between flex-col flex-wrap w-full">
              <p className="mb-2">
                <span className="font-bold">Categoria:</span>{' '}
                {project.category?.name}
              </p>
              <p className="mb-2">
                <span className="font-bold">Total de Orçamento:</span> R$
                {project.budget}
              </p>
              <p className="mb-2">
                <span className="font-bold">Total Utilizado:</span> R$
                {project.cost}
              </p>
            </div>
          ) : (
            <div className="w-full mb-1 mt-4 pb-1 pt-2">
              <ProjectForm
                BtnText="Concluir Edição"
                submitType="edit"
                projectData={project}
              />
            </div>
          )}
        </div>
        <div className="mb-5 pb-5 flex flex-col flex-wrap w-full">
          <div className="flex justify-between flex-wrap w-full">
            <h2 className="mb-2 p-2 text-4xl">Adicione um serviço:</h2>
            <button
              onClick={toggleServiceForm}
              className="bg-zinc-800 text-white px-4 py-2 butao hover:text-yellow-400 cursor-pointer max-h-10"
            >
              {!showServiceForm ? 'Adiconar serviço' : 'Fechar'}
            </button>
          </div>
          <div className="border-b-zinc-800 border-b pb-8 pt-4">
            {showServiceForm && (
              <ServiceForm
                handleSubmit={createService}
                BtnText="Adicionar Serviço"
                projectData={project}
              />
            )}
          </div>
          <h2 className="mb-2 p-2 text-4xl">Serviços</h2>
          <div className="mt-4 pb-8 pt-4 flex flex-row gap-4 lg:gap-2 flex-wrap">
            {services.length > 0 &&
              services.map((service) => (
                <ServiceCard
                  id={service.id}
                  name={service.name}
                  cost={service.cost}
                  description={service.description}
                  key={service.id}
                  handleRemove={removeService}
                />
              ))}
            {services.length === 0 && <p>Não há serviços cadastrados</p>}
          </div>
        </div>
      </div>
    </main>
  )
}
