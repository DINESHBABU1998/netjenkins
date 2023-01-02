import React,{useState,useRef} from 'react'


//controlled and uncontrolled components
//controlled components has value and function 
//uncontrolled components has no such parameters
//control as much as possible --making,rendering {Hooks}
export default function UseRef() {
  // const [state, setstate] = useState("")
  const state = useRef("")
  const [name, setname] = useState("")
  console.log("render");

  // const handletext = (e)=>{
  //   // console.log(e.target.value);
  //   setstate(e.target.value)
  // }
  const handleform=(e)=>{
    e.preventDefault()
    setname(state.current.value)
    console.log(state.current.value); //when we give only state it prints object as {current:input#name}
  }                                   //(state.current) gives the total input tag as output
  return (
    <>
    <h4>{name} is a lucky man</h4>
    <form onSubmit={handleform}>
        Enter your name <input type='text' id='name' ref={state}/><br/>    
        <button className='btn btn-warning'>Submit</button>
    </form>
    </>
  )
}
// onChange={handletext} value={state}---if its controlled only we will use this