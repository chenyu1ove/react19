import Ref from './ref'
import Effect from './effect'
import Counter from './hooks/useSyncExternalStore'

function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Ref 示例合集</h1>
      <Ref />
      <h1>Effect 示例合集</h1>
      <Effect />
      <h1>useSyncExternalStore 示例</h1>
      <Counter />
    </div>
  )
}

export default App
