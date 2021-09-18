import './Country.css'
import Filter from './Filter.jsx'
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {Context} from './Head.jsx'

var result=[]
function Country(props){
  var history=useHistory()
  var [country,setCountry]=useState([])

   useEffect(async function(){
     result=await fetchCountry("https://restcountries.eu/rest/v2/all")
     setCountry(result)
   },[])

   async function fetchCountry(){
       var fetchedresult= await (await fetch("https://restcountries.eu/rest/v2/all")).json()
       console.log(fetchedresult)
        return fetchedresult;
   }

   var filterBySearch=(event)=>{
    var keyword=event.target.value
    console.log(keyword)
    var searchFilter=result.filter(function(item){
       if(item.name.toLowerCase().includes(keyword.toLowerCase())){
           console.log(item.name)
           return true
       }
       else 
       {
       return false
       }
    })
    setCountry([...searchFilter])
   }

   var filterByRegion=(region)=>{
   
    var filteredResult=result.filter(function(item){

        if(region=="all"){
            return true
        }
        
         else if(item.region.toLowerCase()==region.toLowerCase()){
                return true
            }
            else{
                return false
            }
    })
    setCountry([...filteredResult])
   }


    return (
        <div >
        <Filter mode={props.mode} filterBySearch={filterBySearch} filterByRegion={filterByRegion}/>
        <div className="countrylist">
        <div className="fluid-container">
        <div className="row">
            {country.map(function(item){return(<div className="col-12  col-lg-3 col-md-4 px-2">
            <a onClick={()=>{history.push({pathname:'/detail',state:{item,mode1:props.mode}})}}><div class="card m-3"  style={{width: "17rem"}}>
                <img class="card-img-top" src={item.flag} alt="Card image cap" />
                <div class={props.mode?"card-body card-body-dark":"card-body card-body-light"}>
                        <h5 class="card-title">{item.name}</h5>
                        <h6 class="card-text">population:&nbsp;<span>{item.population}</span></h6>
                        <h6 class="card-text">Region:&nbsp;<span>{item.region}</span></h6>
                        <h6 class="card-text">Capital:&nbsp;<span>{item.capital}</span></h6>
                </div>
            </div></a>
    </div>)})}
    </div>    
</div>
</div>
</div>
     
    )
}

export default Country;