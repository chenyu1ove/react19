import { useRef } from 'react'

const ScrollToBox = () => {
  const boxRef = useRef<HTMLDivElement | null>(null)

  return (
    <div>
      <button type="button" onClick={() => boxRef.current?.scrollIntoView({ behavior: 'smooth' })}>
        滚动到盒子
      </button>
      <div style={{ height: 400 }} />
      <div ref={boxRef} style={{ height: 80, background: '#ffd' }}>
        目标盒子
      </div>
    </div>
  )
}

export default ScrollToBox
