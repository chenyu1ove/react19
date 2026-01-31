import { useRef, useState } from 'react'

const TimerRef = () => {
  const timerIdRef = useRef<number | null>(null)
  const [running, setRunning] = useState(false)

  const start = () => {
    if (timerIdRef.current) return
    timerIdRef.current = window.setInterval(() => {
      console.log('滴答')
    }, 1000)
    setRunning(true)
  }

  const stop = () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current)
      timerIdRef.current = null
    }
    setRunning(false)
  }

  return (
    <div>
      <button type="button" onClick={start} disabled={running}>
        开始
      </button>
      <button type="button" onClick={stop} disabled={!running}>
        停止
      </button>
    </div>
  )
}

export default TimerRef
