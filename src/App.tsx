import CanvasDemo from './ref/CanvasDemo'
import FocusInput from './ref/FocusInput'
import LastClickTime from './ref/LastClickTime'
import LatestValueInAsync from './ref/LatestValueInAsync'
import MeasureBox from './ref/MeasureBox'
import ParentControl from './ref/ParentControl'
import ScrollToBox from './ref/ScrollToBox'
import TimerRef from './ref/TimerRef'

function App() {
  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section>
        <h3>1) DOM 访问/操作</h3>
        <FocusInput />
        <ScrollToBox />
        <MeasureBox />
      </section>

      <section>
        <h3>2) 可变值（不触发渲染）</h3>
        <TimerRef />
        <LastClickTime />
      </section>

      <section>
        <h3>3) 原生 API 交互</h3>
        <CanvasDemo />
      </section>

      <section>
        <h3>4) 暴露子组件方法</h3>
        <ParentControl />
      </section>

      <section>
        <h3>5) 避免闭包陷阱</h3>
        <LatestValueInAsync />
      </section>
    </div>
  )
}

export default App
