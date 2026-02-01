import { useEffect, useEffectEvent } from 'react'

const useEffectEventTest = (handler: () => void) => {
  const handleEffect = useEffectEvent(handler)
  useEffect(() => {
    handleEffect()
  }, [])
}

export default useEffectEventTest
