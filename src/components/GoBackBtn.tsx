import { MouseEventHandler } from 'react'
import Icon from '../assets/icon-arrow-left.svg'
type ClickEvent = {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function GoBackBtn({ onClick }: ClickEvent) {
  return (
    <button className="font-bold flex items-center mb-[31px]" onClick={onClick}>
      <img className="mb-[4px] mr-5" src={Icon} alt="" />
      Go back
    </button>
  )
}
