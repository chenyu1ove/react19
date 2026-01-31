import { useRef } from 'react'

const LastClickTime = () => {
  const lastClickRef = useRef<number>(0)

  const handleClick = () => {
    lastClickRef.current = Date.now()
    console.log('上次点击时间', lastClickRef.current)
  }

  return (
    <button type="button" onClick={handleClick}>
      记录时间戳
    </button>
  )
}

export default LastClickTime
