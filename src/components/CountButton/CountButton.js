import React, {useState, useEffect} from "react"

const CountButton = (props) => {
  console.log(props)

  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy)
  }

  useEffect(() => {
    console.log("Use Effect func called")
  }, [currentCount])

  return ( 
    <div>
      <button onClick={handleClick}>+{props.incrementBy}</button>
      <div className={'count-display'}>{currentCount}</div>
    </div>
  )
}

export default CountButton