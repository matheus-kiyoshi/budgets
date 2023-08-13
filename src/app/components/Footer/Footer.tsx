import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import '@/app/globals.css'

export default function Footer() {
  return (
    <footer className="grid-area-footer text-white bg-gray-900 p-12 text-center">
      <ul className="flex justify-center text-center">
        <li className="mx-4 cursor-pointer hover:text-yellow-400 text-2xl">
          <FaFacebook />
        </li>
        <li className="mx-4 cursor-pointer hover:text-yellow-400 text-2xl">
          <FaInstagram />
        </li>
        <li className="mx-4 cursor-pointer hover:text-yellow-400 text-2xl">
          <FaLinkedin />
        </li>
      </ul>
      <p className="mt-8">
        <span className="font-bold">Budgets</span> &copy; 2023
      </p>
    </footer>
  )
}
