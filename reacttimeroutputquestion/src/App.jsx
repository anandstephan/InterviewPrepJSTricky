import { useRef, useState } from "react"

const App = () =>{

  const [time,setTime] = useState(0)
  const timeRef = useRef()

  const start = () =>{
  timeRef.current =   setInterval(()=>{

      setTime(time=>time+1)
    },1000)
  }
  const reset = () =>{

    clearInterval(timeRef.current)
    setTime(0)
  }
  const pasue = () =>{
    if(timeRef.current)
    clearInterval(timeRef.current)
    else{
      timeRef.current =   setInterval(()=>{

        setTime(time=>time+1)
      },1000) 
    }
 
  }
return <div style={{margin:'100px'}}>
    <h1>{time}</h1>
    <button onClick={start}>Start</button>
    <button onClick={reset}>Reset</button>
    <button onClick={pasue}>Pause</button>
</div>
}

export default App