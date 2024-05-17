




   
import React from 'react'
import SingleFlags from './components/SingleFlags';
import "./App.css"
import { useEffect,useState } from 'react'
const App = () => {
  const [flags,setFlags]=useState([]);
  // const [filter,setFilter]=useState([]);
  const [loading,setLoading]=useState(false)
  const [name,setName]=useState("")
  const flagDisplay=async()=>{
    setLoading(true)
    const url="https://restcountries.com/v3.1/all"
    try {
       
       
        const res= await fetch(url)
        const  data= await res.json()
        console.log(data,"data");
        setFlags(data)  
       
         
    } catch (error) {
      console.log(error); 
      
    } 
   
setLoading(false) 
  }

  useEffect(()=>{
    flagDisplay()
},[])

//  useEffect(()=>{
//   const result=flags.filter((item)=>item.common.name.toLowerCase().includes(name.toLowerCase()))
  
//   console.log(result,"result");
//  },[])
const handleChange=(e)=>{
  setName(e.target.value)
  
  
  
}
  
const result=flags.filter((item)=>item.name.common.toLocaleLowerCase().includes(name.toLocaleLowerCase()))




//   console.log(flags,"flags");
  if(loading) return <h3>Loading....</h3>
  return (
    <div className='flags-container'>
      <input type='text' value={name} onChange={handleChange}></input>
        {
            result.map((item)=>{
                return (
                    <SingleFlags key={item.ccn3} {...item}/>
                )
            })
        }

    </div>
  )
}

export default App
   
   
   
   
   
   
   
   
   
   




