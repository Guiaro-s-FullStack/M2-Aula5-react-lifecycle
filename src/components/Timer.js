import { useEffect, useState } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0)

  //   setInterval(() => {
  //     setCount(count + 1)
  //   }, 1000)

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)

    return () => {
      console.log('Cleanup')
      clearInterval(id)
    }
  }, [])

  useEffect(() => {
    document.title = count
  }, [count])

  return (
    <div>
      <h2>Timer</h2>
      <h3>{count}</h3>
    </div>
  )
}

export default Timer
