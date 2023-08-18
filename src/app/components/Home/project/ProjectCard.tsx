import Link from 'next/link'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

interface ProjectCardProps {
  id: number
  name: string
  budget: number
  category: string
  handleRemove: (e: number) => void
}

export default function ProjectCard({
  id,
  name,
  budget,
  category,
  handleRemove,
}: ProjectCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className="p-4 border border-gray-400 rounded-md w-[260px] h-64 m-[0.5%]">
      <h4 className="bg-zinc-800 text-yellow-400 p-2 mb-5 text-xl">{name}</h4>
      <p className="text-gray-500 mb-4">
        <strong className="font-bold">Orçamento:</strong> R${budget}
      </p>
      <p className="text-gray-500 mb-4 flex items-center">
        <strong
          className="font-bold block w-3 h-3 rounded-full bg-slate-50 mr-1"
          id={`${category}`}
        ></strong>{' '}
        {category}
      </p>
      <div className="mt-5 flex items-center">
        <Link
          href={`/project/${id}`}
          className="bg-slate-50 px-1 py-1 text-lg text-gray-800 mr-4 cursor-pointer border border-gray-900 items-center justify-center mb-4 hover:bg-zinc-800 hover:text-yellow-400 transition-all duration-500"
        >
          <BsPencil className="mr-20" /> Editar
        </Link>
        <button
          onClick={handleClick}
          className="bg-slate-50 px-1 py-1 text-lg text-gray-800 mr-4 cursor-pointer border border-gray-900 items-center justify-center mb-4 hover:bg-zinc-800 hover:text-yellow-400 transition-all duration-500"
        >
          <BsFillTrashFill className="mr-20" /> Remover
        </button>
      </div>
    </div>
  )
}
