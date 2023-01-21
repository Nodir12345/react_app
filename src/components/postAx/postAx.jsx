import React from 'react'
import axios from "axios";
const URL = "https://fakestoreapi.com/products"
export const PostAx = () => {
  const [item, setitem] = React.useState([])
  const [input, setinput] = React.useState({ name: "", age: "" })
  
  const submit = (e) => {
    e.preventDefault();
    axios.get(URL, input).then((data) => {
      console.log(data);
    })

  }
  React.useEffect(()=>{
    axios.get(URL).then(respons=>setitem(respons.data))
  },[submit])

  const change = (e) => {
    e.preventdefault()

    setinput((p) => {
      return {
        ...p, [e.target.name]: e.target.value
      }
    })
   
  }
  return (
    <form onSubmit={submit}>
      <input onChange={change}  type="text" name='age' />
      <input onChange={change}  type="text" name='name' />
      <button type="submit" >click</button>
      {item.map(el=><p>{el.title}</p>)}
    </form>
  )
}
