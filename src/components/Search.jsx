import React, { useEffect, useState } from "react"

import { Link } from 'react-router-dom';



const Search = () => {
  const [ads, setAds] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])


  useEffect(() => {
    getAds()
  }, [])

  const getAds = async () => {
    let result = await fetch("http://localhost:5000/ads")
    result = await result.json()
    setAds([...result])
  }
//   const getAds = async () => {
//     let result = await fetch("http://localhost:5000/ads")
//     result = await result.json()
//     setAds([...result])
//   }
 
  const InputHandle = async (event) => {
    
setSearchValue(event.target.value)
  }

const onClickSearch = () => {
  const res = ads.filter(item => item === searchValue)
  setSearchResult([...res])
}
useEffect(() => {
  fetch("http://localhost:5000/ads").then(response => JSON.parse(response)).then(response => setAds(response))
 }, [])


 return (
  <div className="ads-list">
  <h1> SearchApp </h1>
  
  <input type="text" value={searchValue} className="searchadsbox" placeholder="Search Ads" onChange={InputHandle} />
    <button onClick={onClickSearch}>Search</button>
    {
      searchResult.length ? 
        
          searchResult.length && searchResult.map((item)=>
          <ul>
            <li key={item._id}> 

              <div className="adtitle">{item.name}</div> 
              <div> {item.headline} </div>

            </li>
          
        </ul>
        
  
  ):<h2>No Result Found</h2>
    
    }
  
  </div>
      )
   
}
export default Search
