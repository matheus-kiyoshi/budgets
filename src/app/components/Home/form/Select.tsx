type Option = {
  id: string
  name: string
}

type SelectProps = {
  text: string
  name: string
  options: Option[]
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value: string
}

export default function Select({
  text,
  name,
  options,
  handleOnChange,
  value,
}: SelectProps) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-2 font-bold">
        {text}
      </label>
      <select
        name={name}
        id={name}
        className="p-3 rounded-md bg-slate-100"
        onChange={handleOnChange}
        value={value || ''}
      >
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
