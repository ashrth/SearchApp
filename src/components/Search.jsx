import React, { useEffect, useState } from "react"

import { Link } from 'react-router-dom';



const Search = () => {
  const [ads, setAds] = useState([])

  useEffect(() => {
    getAds()
  }, [])

  const getAds = async () => {
    let result = await fetch("http://localhost:5000/ads")
    result = await result.json()
    setAds([...result])
  }
 

  
  

  const InputHandle = async (event) => {
    let key = event.target.value
    if(ads.length){
      const res = ads.filter((item) => 
     setResult([...res])
    
    } 
    
}



  return (
    <div className="ads-list">
    <h1> SearchApp </h1>
      <input type="" className="searchadsbox" placeholder="Search Ads" onChange={InputHandle} />
      {
      
         ads.length>0? ads.map((item)=>
        <li key={item._id}> 
          
        <div className="adtitle">{item.name}</div> 
        <div> {item.headline} </div>
        
      </li>
        )
        :<h2>No Result Found</h2>
      
      }
    
    </div>
  )

  }
export default Search
