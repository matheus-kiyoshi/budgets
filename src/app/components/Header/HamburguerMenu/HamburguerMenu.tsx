import { MenuButton } from './MenuButton'

export default function HamburguerMenu({
  onClick,
  isClicked,
}: {
  onClick: () => void
  isClicked: boolean
}) {
  return (
    <div className="flex items-center sm:hidden" onClick={onClick}>
      <MenuButton $isClicked={isClicked} />
    </div>
  )
}
