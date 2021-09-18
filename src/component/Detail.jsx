import './Detail.css'
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
function Detail(){
    var loc=useLocation()
    var history=useHistory()
    var item=loc.state.item
    var mode=loc.state.mode1

    return (
        <div>
        <div className={mode?"headbar row":"headbar-light row"}>
              <div className={mode?"title-dark col-8":"title-light col-8"}>Where in the world?</div>
              <div className={mode?"darkmode col-4":"lightmode col-4"}><a>Dark Mode</a></div>
        </div>
        <div  className="fluid-container">
                     <button style={{marginLeft:"6vw",marginTop:"6vw"}} onClick={()=>{history.push('/')}} className={mode?"button-dark":"button-light"}><img src="https://img.icons8.com/ios/24/000000/long-arrow-left.png"/>Back</button>
        </div>
        <div className="detailsection">
                <div className="row">
                    <div className="col-12 col-md-6">
                     <img style={{width:"90%"}} src={loc.state.item.flag} />
                     </div>
                     <div className="col-12 col-md-6">
                        <div className={mode?"fluid-container detailbox-dark":"fluid-container detailbox-light"}>
                                <h4>{item.name}</h4>
                                <div className={mode?"row detailmiddle-dark":"row detailmiddle-light"}>
                                     <div className="col-6">
                                         <h6>Native Name:&nbsp;<span>{item.nativeName}</span></h6>
                                         <h6>Population:&nbsp;<span>{item.population}</span></h6>
                                         <h6>Region:&nbsp;<span>{item.region}</span></h6>
                                         <h6>Sub Region:&nbsp;<span>{item.subregion}</span></h6>
                                         <h6>Capital:&nbsp;<span>{item.capital}</span></h6>
                                     </div>
                                     <div className="col-6">
                                         <h6>Top Level Domain:&nbsp;<span>{item.topLevelDomain}</span></h6>
                                         <h6>Currencies:&nbsp;<span>{item.currencies[0].name}</span></h6>
                                         <h6>Languages:&nbsp;<span>{item.languages[0].name}</span></h6>
                                     </div>
                                </div>
                                <div className=" row borders">
                                        <div className="col-12 col-md-3"><h6>Border Countries</h6></div>
                                        <div className="col-12 col-md-9">
                                            {item.borders.map((name)=><button style={{color:"darkgray",margin:"1px",fontSize:"0.85rem"}} className={mode?"button-dark":"button-light"}>{name}</button>)}
                                        </div>
                                        
                                </div>
                             
                        </div>
                     </div>
                </div>
        </div>

        </div>
    )
}
export default Detail;