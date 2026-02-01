import { useState, useEffect } from 'react'
import useText from './useText'
import useEffectEventTest from './useEffectEvent'

export default function SaveButton() {
  const [isOnline, setIsOnline] = useState(true)
  const [count, setCount] = useState(0)
  useText()
  useEffectEventTest(() => {
    console.log('count in useEffectEventTest:', count)
  })
  function handleOnline() {
    setIsOnline(true)
    console.log('count:', count)
  }
  function handleOffline() {
    setIsOnline(false)
  }
  //  const handleOnline = useCallback(() => {
  //     setIsOnline(true)
  //     console.log('count:', count)
  //   }, [count])
  //   const handleOffline = useCallback(() => {
  //     setIsOnline(false)
  //   }, [])
  useEffect(() => {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])
  // }, [handleOffline, handleOnline])

  function handleSaveClick() {
    console.log('✅ Progress saved')
    setCount((pre) => pre + 1)
  }
  console.log('SaveButton render count:', count)
  return (
    <>
      <button disabled={!isOnline} onClick={handleSaveClick}>
        {/* useEffect闭包问题 */}
        {isOnline ? 'Save progress' : 'Reconnecting...'}
      </button>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        button
      </button>
    </>
  )
}
