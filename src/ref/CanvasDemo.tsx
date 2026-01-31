import { useEffect, useRef } from 'react'

const CanvasDemo = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.fillStyle = '#f66'
    ctx.fillRect(10, 10, 80, 50)
  }, [])

  return <canvas ref={canvasRef} width={120} height={80} />
}

export default CanvasDemo
