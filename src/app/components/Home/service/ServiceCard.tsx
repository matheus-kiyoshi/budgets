import { BsFillTrashFill } from 'react-icons/bs'

interface ServiceCardProps {
  id: number
  name: string
  cost: number
  description: string
  handleRemove: (id: number, cost: number) => void
}

export default function ServiceCard({
  id,
  name,
  cost,
  description,
  handleRemove,
}: ServiceCardProps) {
  function remove(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    handleRemove(id, cost)
  }

  return (
    <div className="p-4 border border-gray-400 rounded-md w-[260px] h-64 m-[0.5%]">
      <h4 className="bg-zinc-800 text-yellow-400 p-2 mb-5 text-xl">{name}</h4>
      <p className="text-gray-500 mb-4">
        <strong className="font-bold">Custo total:</strong> R${cost}
      </p>
      <p className="text-gray-500 mb-4 flex items-center">
        <p>{description}</p>
      </p>
      <div className="mt-5 flex items-center">
        <button
          onClick={remove}
          className="bg-slate-50 px-1 py-1 text-lg text-gray-800 mr-4 cursor-pointer border border-gray-900 items-center justify-center mb-4 hover:bg-zinc-800 hover:text-yellow-400 transition-all duration-500"
        >
          <BsFillTrashFill className="mr-20" /> Remover
        </button>
      </div>
    </div>
  )
}
