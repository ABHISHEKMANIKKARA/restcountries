import './Head.css'
import Country from './Country.jsx'
import { useState, useEffect } from 'react';
import { createContext } from 'react';
function Head(){
    var [mode,setMode]=useState(true)
    function changeMode(){
        setMode(!mode)
    }
     useEffect(()=>{
        document.body.style.backgroundColor=mode?"hsl(207, 26%, 17%)":"hsl(0, 0%, 98%)"
     },[mode])   
        
    
    return(
       
        <div>
        <div className={mode?"headbar row":"headbar-light row"}>
              <div className={mode?"title-dark col-8":"title-light col-8"}>Where in the world?</div>
              <div className={mode?"darkmode col-4":"lightmode col-4"}><a href="#" onClick={changeMode}>Dark Mode</a></div>
        </div>
        <Country mode={mode} />
        </div>
      
    )
}
export default Head;