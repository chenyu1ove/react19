import { useRef } from 'react'
import FancyInput, { InputHandle } from './FancyInput'

const ParentControl = () => {
  const inputHandleRef = useRef<InputHandle | null>(null)

  return (
    <div>
      <FancyInput ref={inputHandleRef} />
      <button type="button" onClick={() => inputHandleRef.current?.focus()}>
        聚焦
      </button>
      <button type="button" onClick={() => inputHandleRef.current?.clear()}>
        清空
      </button>
    </div>
  )
}

export default ParentControl
