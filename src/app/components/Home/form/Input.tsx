type InputProps = {
  type: string
  text: string
  name: string
  placeholder: string
  maxLength?: number
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export default function Input({
  type,
  text,
  name,
  placeholder,
  maxLength,
  handleOnChange,
  value,
}: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-2 font-bold">
        {text}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        maxLength={maxLength}
        required
        className="p-3 rounded-md border-none bg-slate-100 placeholder:text-gray-500"
      />
    </div>
  )
}
