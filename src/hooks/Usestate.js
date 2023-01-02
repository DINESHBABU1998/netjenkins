import React ,{useState,useEffect} from 'react'

export default function Usestate() {
    const [val,setval] = useState(0)
    const [name,setname]=useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(()=>{
          setCount((count)=>count+1)  //it re-renders page with new value(usestate)
        },1000)
    },[]) //it renders  time only with dependency but wihout it re-renders many times//[eye]-if we click eye button then only it will re-render the page
    useEffect(()=>{
        console.log("rendered"); //it will print this whenever we update anything the component means it gets re-rendered every time when we update anything or click the button also
    }) //if we give dependency like []-then whatever we do in the page it will render it only one time
    // const func1=()=>{
    //     console.log(val);
    //     setval(val+1)
    //  (name == "React js is awesome") ? setname("React is a JS Library"): setname("React js is awesome")
    // }
    // const func2=()=>{
    //     setval(val-1)
    // }
    const fun=(e)=>{
        console.log(e.target.value);
        setname(e.target.value)
    }

    return (
    <>
    <h1>Auto counter rendering it {count} times</h1>
    <h1>{val}</h1>
    <button className='btn btn-warning' onClick={()=>{setval(val+1)}}>Increment</button>
    <button className='btn btn-primary' onClick={()=>{setval(val-1)}}>Decrement</button>
    <h1>{name}</h1>
    <input type='text' onChange={fun}/>
    </>
  )
}
