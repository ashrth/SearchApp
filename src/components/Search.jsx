import React, { useEffect, useState } from "react"

import { Link } from 'react-router-dom';



const Search = () => {
  const [isSearch, setIsSearch] = useState(false)
  const [filteredAds, setFilteredAds] = useState([])
  const [ads, setAds] = useState([])
  const [searchValue, setSearchValue] = useState('')
  // const [searchResult, setSearchResult] = useState([])


  useEffect(() => {
    fetch(`http://localhost:5000/ads/${searchValue}`).then((response) => response.json())
    .then((data)=>{setFilteredAds(data)
      console.log(data)
  })
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

const handleClick = async (event) => {
  console.log("hello")
  setIsSearch(true)
  
  const show = await fetch(`http://localhost:5000/ads/${searchValue}`).then((response) => response.json())
    setFilteredAds(show)
    console.log("hullo", show)
  // console.log("searc",searchValue)
  // console.log(ads[0].name)
  // const res = ads.filter(item => item.name == searchValue)
  // console.log(res)
  // setAds([...res])
  
}
useEffect(() => {
  fetch("http://localhost:5000/ads").then((response) => response.json())
  .then((ads)=>{setAds(ads)
    console.log(ads)
})
 }, [])

//  useEffect(() => {
//   fetch(`http://localhost:5000/ads/:${}`).then((response) => response.json())
//   .then((ads)=>{setAds(ads)
// })
//  }, [])


 return (
  <div className="ads-list">
  <h1> SearchApp </h1>
  
  <input type="text" value={searchValue} className="searchadsbox" placeholder="Search Ads" onChange={InputHandle} />
  
    <button className="searchbtn" onClick={handleClick}>Search</button>
    
    
    {!isSearch?
ads.length ? 
ads.length && ads.map((item)=>
<ul>
            <li key={item._id}> 

              <div className="adtitle">{item.name}</div> 
              <div> {item.headline} </div>

            </li>

        </ul>
  
  )
  :<h2>No Result Found</h2>
  :filteredAds.length ? 
  filteredAds.length && filteredAds.map((item)=>
  <ul>
              <li key={item._id}> 
  
                <div className="adtitle">{item.name}</div> 
                <div> {item.headline} </div>
  
              </li>
  
          </ul>
    
    )
    :<h2>No Result Found</h2>
}
    
  
  </div>
      )
   
}
export default Search
