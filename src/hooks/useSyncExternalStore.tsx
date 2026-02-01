// External Store：例如
// 不在 React state 里的数据
// localStorage
// Redux / Zustand 内部 store
// window / DOM / browser API
// WebSocket 状态
// 订阅外部的数据源
// React 18 提供了 useSyncExternalStore 来订阅外部 store 的变化
// useSyncExternalStore(
//   subscribe,
//   getSnapshot,
//   getServerSnapshot? // SSR
// )

import { useSyncExternalStore } from 'react'

type Listener = () => void

function createStore<T>(initialState: T) {
  let state = initialState
  const listeners = new Set<Listener>()
  return {
    getSnapshot: () => state,

    setState(next: T) {
      state = next
      listeners.forEach((l) => l())
    },

    subscribe(listener: Listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
}

const counterStore = createStore(0)

function Counter() {
  const count = useSyncExternalStore(counterStore.subscribe, counterStore.getSnapshot)
  return <button onClick={() => counterStore.setState(count + 1)}>{count}</button>
}

export default Counter
