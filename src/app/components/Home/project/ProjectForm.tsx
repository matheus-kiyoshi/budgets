'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

export type Project = {
  id: string
  name: string
  budget: number
  category: {
    id: string
    name: string
  }
  cost: number
  services: object[]
}

type ProjectFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  BtnText: string
  projectData?: Project
}

export default function ProjectForm({
  handleSubmit,
  BtnText,
  projectData,
}: ProjectFormProps) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState<Project>(projectData)

  useEffect(() => {
    axios('http://localhost:3333/categories').then((response) => {
      setCategories(response.data)
    })
  }, [])

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(project)
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
