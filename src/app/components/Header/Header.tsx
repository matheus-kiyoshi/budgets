'use client'
import '@/app/globals.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/costs_logo.png'
import HamburguerMenu from './HamburguerMenu/HamburguerMenu'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="grid-area-header flex justify-between bg-gray-900 p-4">
      <nav
        className={twMerge(
          'w-full flex sm:flex-row justify-evenly mx-auto my-0 flex-wrap',
          isOpen && 'flex-col gap-6 sm:gap-0',
        )}
      >
        <div className="flex justify-evenly items-center w-full sm:w-auto my-0 flex-wrap">
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>

          <HamburguerMenu
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            isClicked={isOpen}
          />
        </div>

        <ul
          className={twMerge(
            'hidden sm:flex sm:flex-row gap-8 text-xl items-center text-white',
            isOpen && 'flex flex-col',
          )}
        >
          <li className="text-white hover:text-yellow-400">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white hover:text-yellow-400">
            <Link href="/projects">Projetos</Link>
          </li>
          <li className="text-white hover:text-yellow-400">
            <Link href="/company">Empresa</Link>
          </li>
          <li className="text-white hover:text-yellow-400">
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
