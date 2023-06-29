import { MouseEventHandler } from 'react'
import GoBackBtn from './GoBackBtn'
interface FormProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function Form({ onClick }: FormProps) {
  return (
    <div>
      <GoBackBtn onClick={onClick} />
    </div>
  )
}
