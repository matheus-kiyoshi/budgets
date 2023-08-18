'use client'
import { useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import { Project, categories } from './ProjectType'

type ProjectFormProps = {
  BtnText: string
}

export default function ProjectForm({ BtnText }: ProjectFormProps) {
  const [project, setProject] = useState<Project>({
    name: '',
    budget: 0,
    category: {
      id: '',
      name: '',
    },
    cost: 0,
    services: [],
  })

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const projects = JSON.parse(localStorage.getItem('projects') || '[]')
    projects.push(project)

    localStorage.setItem('projects', JSON.stringify(projects))
    console.log(localStorage.getItem('projects'))
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
