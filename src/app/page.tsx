import '@/app/globals.css'
import LinkButton from './components/Home/LinkButton'
import Image from 'next/image'
import savingsImage from '@/../public/savings2.png'

export default function Home() {
  return (
    <main className="grid-area-main w-full flex flex-col items-center justify-center p-16 gap-2">
      <h1 className="text-4xl mb-2 leading-loose text-center">
        Bem vindo ao{' '}
        <strong className="text-yellow-400 p-1 bg-zinc-900">Budgets</strong>
      </h1>
      <p className="mb-6 text-gray-500">
        Comece a gerenciar os seus projetos agora mesmo!
      </p>
      <LinkButton pageDirectory="/newproject" text="Criar Projeto" />
      <div className="my-8">
        <Image src={savingsImage} alt="Savings" width={384} height={384} />
      </div>
    </main>
  )
}
