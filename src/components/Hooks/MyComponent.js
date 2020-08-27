import React,{useState} from 'react'

function MyComponent() {
  const [isToggled, setIsToggled] = useState(false);
  const toggle = ()=>setIsToggled(!isToggled)
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <h1>{isToggled +" Hey"}</h1>
    </div>
  )
}

export default MyComponent
