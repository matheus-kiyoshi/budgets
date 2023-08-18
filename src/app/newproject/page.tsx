import ProjectForm from '../components/Home/project/ProjectForm'

export default function NewProject() {
  return (
    <main className="w-5/6 sm:w-5/12 mx-auto p-12">
      <h1 className="mb-2 text-2xl font-bold">Criar Projeto</h1>
      <p className="text-gray-500">
        Crie seu projeto para depois adicionar os serviços
      </p>
      <ProjectForm BtnText="Criar Projeto" />
    </main>
  )
}
