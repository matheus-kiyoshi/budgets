import ProjectForm from '../components/Home/project/ProjectForm'

export default function NewProject() {
  const createPost = (project: Project) => {
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .catch((err) => console.log(err))
  }

  return (
    <main className="w-[452px] mx-auto p-12">
      <h1 className="mb-2">Criar Projeto</h1>
      <p className="text-gray-500">
        Crie seu projeto para depois adicionar os serviços
      </p>
      <ProjectForm handleSubmit={createPost} BtnText="Criar Projeto" />
    </main>
  )
}
