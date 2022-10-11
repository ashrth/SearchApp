import React, { useCallback, useEffect, useState } from "react"
import _ from "debounce"
import AllAds from "./AllAds"
import FilteredAds from "./FilteredAds"



const Search = () => {
  const [isSearch, setIsSearch] = useState(false)
  const [filteredAds, setFilteredAds] = useState([])
  const [ads, setAds] = useState([])
  const [searchValue, setSearchValue] = useState('')
  

  const handleSearch = useCallback(
    _.debounce(async (value) => {
      filterSearchWithApi(value)
    }, 500),
    []
  )
  const getAllData = async () => {
    try {
      fetch("http://localhost:5000/ads")
        .then((response) => response.json())
        .then((ads) => {
          setAds(ads)
          console.log(ads)
        })
    } catch (err) {
      console.log("error in getAllData", err)
    }
  }

  const filterSearchWithApi = async (value) => {
    try {
      fetch(`http://localhost:5000/ads/${searchValue}`)
        .then((response) => response.json())
        .then((ads) => {
          setAds(ads)
          console.log(ads)
        })
     
    } catch (err) {
      console.log("error in filterSearchWithApi", err)
    }
  }
 
  const InputHandle = async (event) => {
    
    if(event.target.value.length==0){
      setIsSearch(false)
    }
setSearchValue(event.target.value)
handleSearch(event.target.value)
  }

const handleClick = async (event) => {
   setIsSearch(true)
  console.log(ads[0].name)
  const res = ads.filter(item => item["name"].toLowerCase().includes(searchValue.toLowerCase()) || item["headline"].toLowerCase().includes(searchValue.toLowerCase()) )
  
  console.log(res)
  setFilteredAds([...res])
  
  
}

useEffect(() => {
//   fetch("http://localhost:5000/ads").then((response) => response.json())
//   .then((ads)=>{setAds(ads)
//     console.log(ads)
// })
getAllData()
 }, [])



 return (
  <div className="ads-list">
  <h1> SearchApp </h1>
  <input type="text" value={searchValue} className="searchadsbox" placeholder="Search Ads" onChange={InputHandle} />
  <button className="searchbtn" onClick={handleClick}>Search</button>

    {!isSearch?
<AllAds data={ads}/>
: <FilteredAds data={filteredAds}/> 
}
  </div>
      )
   
}
export default Search
