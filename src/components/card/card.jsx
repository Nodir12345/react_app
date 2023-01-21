import React from 'react'

export const Card = () => {
const [state, setstate] = React.useState(0)
const [item, setitem] = React.useState(0)
React.useEffect(()=>{

  return ()=>{
    console.log("remove");
  }
},[state])
  return (
    <div>
      <p>{state}</p>
      <p>{item}</p>
<button onClick={()=>setstate(state+1)}>stete</button>
<button onClick={()=>setitem(item+1)}>item</button>

    </div>
  )
}
