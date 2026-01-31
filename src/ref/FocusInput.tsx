import { useEffect, useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return <input ref={inputRef} placeholder="自动聚焦" />
}

export default FocusInput
