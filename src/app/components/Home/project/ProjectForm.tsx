'use client'
import { useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import { Project, categories } from './ProjectType'
import { useRouter } from 'next/navigation'

type ProjectFormProps = {
  submitType: string
  BtnText: string
  projectData?: Project
}

export default function ProjectForm({
  BtnText,
  projectData,
  submitType,
}: ProjectFormProps) {
  const [project, setProject] = useState<Project>(
    projectData || {
      name: '',
      id: 0,
      budget: 0,
      category: {
        id: '',
        name: '',
      },
      cost: 0,
      services: [],
    },
  )
  const router = useRouter()

  function editPost(projectData: Project) {
    if (project.budget < project.cost) {
      return false
    }
    const projects = JSON.parse(localStorage.getItem('projects') || '[]')
    const selectedProject = projects.find(
      (project: Project) => project.id === projectData.id,
    )

    projects.splice(projects.indexOf(selectedProject), 1, project)
    localStorage.setItem('projects', JSON.stringify(projects))
    router.refresh()
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitType === 'edit' && projectData) {
      editPost(projectData)
    }

    if (submitType === 'new') {
      const projects = JSON.parse(localStorage.getItem('projects') || '[]')
      const id = projects.length > 0 ? projects[projects.length - 1].id + 1 : 1
      project.id = id
      projects.push(project)

      localStorage.setItem('projects', JSON.stringify(projects))
      router.push('/projects')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={handleFormSubmit} className="w-full my-8">
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget.toString() : ''}
      />
      <Select
        name="categoryID"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitButton text={BtnText} />
    </form>
  )
}
