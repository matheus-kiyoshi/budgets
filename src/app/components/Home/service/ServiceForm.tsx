import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import { Project, Service } from '../project/ProjectType'

interface ServiceFormProps {
  handleSubmit: (projectData: Project) => void
  BtnText: string
  projectData: Project
}

export default function ServiceForm({
  handleSubmit,
  BtnText,
  projectData,
}: ServiceFormProps) {
  const [service, setService] = useState<Service>({
    id: 0,
    name: '',
    cost: 0,
    description: '',
  })

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleFormSubmit} className="w-full">
      <Input
        type="text"
        text="Nome do Serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do Serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do Serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />
      <SubmitButton text={BtnText} />
    </form>
  )
}
