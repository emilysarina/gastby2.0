import * as React from "react"
import {useState} from "react"
import Header from "../components/header"
import Form from "../components/Form"


const IndexPage = () => {
  const [state, setState] = useState("")
  const [text, setText] = useState("")
  function handleChange(e){
    return setState(e.target.value)
  }

  function handleClick(e){
    e.preventDefault()
    return setText("Cloudy")
  }
  return (
   <main>
   <Header text="Weather App"/>
   <Form buttonText='Search' inputText="Type City Here" 
   handleChange={handleChange} 
   handleClick={handleClick} 
   />
   <div>
     {text}
   </div>
    </main>
  )
}

export default IndexPage
