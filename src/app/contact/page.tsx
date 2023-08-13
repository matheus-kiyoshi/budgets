import '@/app/globals.css'
import { TfiEmail } from 'react-icons/tfi'
import { FaGithub } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import Link from 'next/link'

export default function Contact() {
  return (
    <main className="grid-area-main m-14 flex flex-col justify-start items-start gap-16">
      <h1 className="text-7xl">Contact</h1>
      <div className="flex flex-col justify-evenly items-start p-8 gap-8 w-full">
        <div className="flex justify-between items-center gap-2">
          <TfiEmail className="h-8 w-8 lg:w-10 lg:h-10" />
          <p>matheus.kiyoshi.f@gmail.com</p>
        </div>
        <div>
          <Link
            href="https://github.com/matheus-kiyoshi"
            target="_blank"
            className="cursor-pointer hover:text-yellow-500 flex justify-between items-center gap-2 transition-all duration-150"
          >
            <FaGithub className="h-8 w-8 lg:w-10 lg:h-10" />
            <p>/matheus-kiyoshi</p>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Link
            href="https://wa.me/5511977936452"
            target="_blank"
            className="cursor-pointer hover:text-green-500 flex justify-between items-center gap-2 transition-all duration-150"
          >
            <RiWhatsappFill className="h-8 w-8 lg:w-10 lg:h-10 text-green-600" />
            <p>+55 (11) 97793-6452</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
