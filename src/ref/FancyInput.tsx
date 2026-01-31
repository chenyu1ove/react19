import { forwardRef, useImperativeHandle, useRef } from 'react'

export type InputHandle = {
  focus: () => void
  clear: () => void
}

const FancyInput = forwardRef<InputHandle>((_props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => {
      if (inputRef.current) inputRef.current.value = ''
    },
  }))

  return <input ref={inputRef} placeholder="可被父组件控制" />
})

FancyInput.displayName = 'FancyInput'

export default FancyInput
