import React from 'react'

export function Inner() {
const [item,setitem]=React.useState(0)
const [hide,sethide]=React.useState(true)
return <>
{hide?<div><h1>{item}</h1>
<button onClick={()=>setitem(item+1)}>ADD</button>
</div>:""}

<button onClick={()=>sethide(!hide)}>{hide?"REMOve":"HIDE"}</button>
</>
}

