import { useEffect, useRef, useState } from 'react'

const LatestValueInAsync = () => {
  const [count, setCount] = useState(0)
  const latestCountRef = useRef(count)

  useEffect(() => {
    latestCountRef.current = count
  }, [count])

  const handleAsync = () => {
    setTimeout(() => {
      console.log('最新计数', latestCountRef.current)
    }, 1000)
  }

  return (
    <div>
      <div>计数: {count}</div>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        加一
      </button>
      <button type="button" onClick={handleAsync}>
        1秒后打印最新值
      </button>
    </div>
  )
}

export default LatestValueInAsync
