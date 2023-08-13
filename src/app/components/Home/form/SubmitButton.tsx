export default function SubmitButton({ text }: { text: string }) {
  return (
    <button className="bg-zinc-900 text-white py-3 px-5 cursor-pointer hover:text-yellow-400 transition-all duration-500">
      {text}
    </button>
  )
}
