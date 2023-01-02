import React from 'react';
import ReactDOM from 'react-dom/client';
// import Fox,{Hero} from './components/Appbar'
import Appbar from './components/Appbar';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Watch from './pages/Watch';
// import Useparam from './hooks/Useparam';
// import Usestate from './hooks/Usestate';
// import Fetch from './hooks/Fetch';
// import UseRef from './hooks/UseRef';


const root = ReactDOM.createRoot(document.getElementById('root'));

// const Navbar=(props)=>{
//     console.log("Nav bar function over here");
//     return <h1 style={{color:"red",backgroundColor:"blue"}}>NavBar{props.name}</h1>
// }

// const Time=()=>{
//     const time=new Date().toLocaleTimeString()
//     return(<div className='container'>
//     <h1 className='text'>Webapp Clock</h1>
//     <h2 className='time'>Time:{time}</h2>
//     </div>
//     )
// }

// const arr1=['dinesh','babu','vijay']
// setInterval(()=>{
root.render(<>
{/* <BrowserRouter>
<Routes>
    <Route path='/book/:name/:id' element={<Useparam/>}/>
    <Route path='/' element={<h1>HOME</h1>}/>
</Routes>

</BrowserRouter> */}
{/* <Usestate/> */}
{/* <UseRef/> */}

{/* <Fetch/> */}



<BrowserRouter>
<Appbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/watch:data' element={<Watch/>}/>
</Routes>
</BrowserRouter>

{/* <ul>
    {arr1.map((val)=>{
     return <li>{val}</li>
    })}
</ul>
<Fox/>
<Hero/>
<Navbar name="dinesh" />
<h1>Welcome to the Awesome React Js class</h1>
<Time/> */}



</>
);
// },1000)



