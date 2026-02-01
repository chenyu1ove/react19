const useText = () => {
  // 在被调用组件重新渲染时，useText 也会重新执行
  console.log('useText called')
  return 'HELLO WORLD'
}

export default useText
