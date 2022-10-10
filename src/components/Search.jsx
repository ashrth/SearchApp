import React, { useEffect, useState } from "react"

import { Link } from 'react-router-dom';



const Search = () => {
  const [ads, setAds] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])


  useEffect(() => {
   
  }, [])

  // const getAds = async () => {
  //   let result = await fetch("http://localhost:5000/ads")
  //   result = await result.json()
  //   setAds([...result])
  // }
//   const getAds = async () => {
//     let result = await fetch("http://localhost:5000/ads")
//     result = await result.json()
//     setAds([...result])
//   }
 
  const InputHandle = async (event) => {
    // let key = event.target.value
    // if(ads.length){
    //   const res = ads.filter((item) => 
    //  setResult([...res])
setSearchValue(event.target.value)
  }

const onClickSearch = () => {
  const res = ads.filter(item => item === searchValue)
  setSearchResult([...res])
}
useEffect(() => {
  fetch("http://localhost:5000/ads").then((response) => response.json()).then((ads)=>{console.log(ads)})
 }, [])


 return (
  <div className="ads-list">
  <h1> SearchApp </h1>
  
  <input type="text" value={searchValue} className="searchadsbox" placeholder="Search Ads" onChange={InputHandle} />
    <button className="searchbtn" onClick={onClickSearch}>Search</button>
    {
      searchResult.length ? (
<ul>
  {
        
          searchResult.length && searchResult.map((item)=>
          
            <li key={item._id}> 

              <div className="adtitle">{item.name}</div> 
              <div> {item.headline} </div>

            </li>
}
        </ul>
        
  )
  :(<h2>No Result Found</h2>)
    
    }
  
  </div>
      )
   
}
export default Search
