import Link from 'next/link'

export default function LinkButton({
  pageDirectory,
  text,
}: {
  pageDirectory: string
  text: string
}) {
  return (
    <Link
      href={pageDirectory}
      className="text-white px-4 py-2.5 rounded-md bg-zinc-900 transition-all duration-500 hover:bg-zinc-800 hover:text-yellow-400"
    >
      {text}
    </Link>
  )
}
