import React from "react";
import axios from "axios";
const URL = "https://fakestoreapi.com/products"

export const Ax = () => {
  const [item, setitem] = React.useState([])
  const [loading, setloading] = React.useState(true)

  React.useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res);
      setitem(res.data)
      setloading(!loading)
    })
  },[])
  return <div>
    <li>{loading ? "...loading" : item.map((e) => e.title)}</li>
<li>{item.map(e=>e.id)}</li>
  </div>
}

// import React from 'react'
// import axios from 'axios'
// const URL = "https://jsonplaceholder.typicode.com/users"
// export const Ax = () => {
//   const [data, setdata] = React.useState([])
//   const [loading, setloading] = React.useState(true)
//   React.useEffect(() => {
//     axios.get(URL).then(respons => {
//       setdata(respons.data)
//       setloading(!loading)
//     })
//   }, [])
//   return <div>
//     <p>{loading? "loading":data.map((el) => el.name)}</p>
//   </div>
// }




























































// import React from 'react'
// import axios from 'axios'
// const URL= "https://jsonplaceholder.typicode.com/users"
// export const Ax = ()=> {
// const [data,setdata] = React.useState([])
// const {loading, setloading}=React.useState(true)

// React.useEffect(()=>{
// axios.get(URL).then(response=>{
//   setdata(response.data)
//   setloading(!loading)
// }).catch(error=>{console.log(error);})
// },[]);
//   return (
//     <div>
//       {loading?<h2>loading</h2>:
//       data.map((el)=><p>{el.name}</p>)}</div>
//   )
// }

