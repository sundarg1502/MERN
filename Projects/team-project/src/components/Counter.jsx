import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>{count}</div>
  )
}

export default Counter