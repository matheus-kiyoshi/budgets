export type Category = {
  id: string
  name: string
}

export type Service = {
  id: number
  name: string
  cost: number
  description: string
}

export type Project = {
  name: string
  id: number
  budget: number
  category: Category
  cost: number
  services: Service[]
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Infra',
  },
  {
    id: '2',
    name: 'Desenvolvimento',
  },
  {
    id: '3',
    name: 'Design',
  },
  {
    id: '4',
    name: 'Planejamento',
  },
]
