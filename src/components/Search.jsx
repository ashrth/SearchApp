import React, { useCallback, useEffect, useState } from "react"
import AllAds from "./AllAds"
import FilteredAds from "./FilteredAds"



const Search = () => {
  const [isSearch, setIsSearch] = useState(false)
  const [filteredAds, setFilteredAds] = useState([])
  const [ads, setAds] = useState([])
  const [searchValue, setSearchValue] = useState('')
  
 //debounce
  // const debounce=(func)=>{
  //   let timer;
  //   return function (...args){
  //     const result= this
  //     if(timer) clearTimeout(timer)
  //     timer= setTimeout(()=>{
  //       timer=null
  //       func.apply(result, args)

  //     }, 500)
  //   }
  // }
  const InputHandle = async (event) => {
    
    if(event.target.value.length==0){
      setIsSearch(false)
    }
setSearchValue(event.target.value)

  }

const handleClick = async (event) => {
   setIsSearch(true)
  console.log(ads[0].name)
  const res = ads.filter(item => item["name"].toLowerCase().includes(searchValue.toLowerCase()) || item["headline"].toLowerCase().includes(searchValue.toLowerCase()) )
  
  console.log(res)
  setFilteredAds([...res])
  
  
}

useEffect(() => {
  fetch("http://localhost:5000/ads").then((response) => response.json())
  .then((ads)=>{setAds(ads)
    console.log(ads)
})
 }, [])

// const debouncedversion= useCallback(debounce(InputHandle), [])

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
