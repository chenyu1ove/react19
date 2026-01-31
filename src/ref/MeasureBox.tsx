import { useRef } from 'react'

const MeasureBox = () => {
  const boxRef = useRef<HTMLDivElement | null>(null)

  const handleMeasure = () => {
    if (!boxRef.current) return
    const rect = boxRef.current.getBoundingClientRect()
    console.log('尺寸', rect.width, rect.height)
  }

  return (
    <div>
      <div ref={boxRef} style={{ width: 120, height: 60, background: '#def' }} />
      <button type="button" onClick={handleMeasure}>
        获取尺寸
      </button>
    </div>
  )
}

export default MeasureBox
