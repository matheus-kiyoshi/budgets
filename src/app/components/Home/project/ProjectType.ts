export type Category = {
  id: string
  name: string
}

export type Project = {
  name: string
  id: number
  budget: number
  category: Category
  cost: number
  services: object[]
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
