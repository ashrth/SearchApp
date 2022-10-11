import React, { useCallback, useEffect, useState } from "react"

const Search = () => {
  const [isSearch, setIsSearch] = useState(false)
  const [filteredAds, setFilteredAds] = useState([])
  const [ads, setAds] = useState([])
  const [searchValue, setSearchValue] = useState('')
  
 //debounce
  const debounce=(func)=>{
    let timer;
    return function (...args){
      const result= this
      if(timer) clearTimeout(timer)
      timer= setTimeout(()=>{
        timer=null
        func.apply(result, args)

      }, 500)
    }
  }



  const InputHandle = async (event) => {
    
    if(event.target.value.length==0){
      setIsSearch(false)
    }
setSearchValue(event.target.value)

  }

const handleClick = async (event) => {
  // console.log("hello")
   setIsSearch(true)
  
  
  //   console.log("hullo", show)
  // console.log("searc",searchValue)
  console.log(ads[0].name)
  const res = ads.filter(item => item.name == searchValue)
  
  console.log(res)
  setFilteredAds([...res])
  
  
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

const debouncedversion= useCallback(debounce(InputHandle), [])

 return (
  <div className="ads-list">
  <h1> SearchApp </h1>
  
  <input type="text" value={searchValue} className="searchadsbox" placeholder="Search Ads" onChange={InputHandle} />
  
    <button className="searchbtn" onClick={handleClick}>Search</button>
    
    
    {!isSearch?
ads.length ? 
  ads.map((item)=>
  <div className="card-deck col-sm-5 mb-3 card-space ">
  <div className="card">
    <img src="..." className="card-img-top" alt="image"></img>
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <p className="card-text">{item.headline}</p>
      
    </div>
  </div>
</div>

  
 )
  :<h2>No Result Found</h2>
  :filteredAds.length ? 
  filteredAds.length && filteredAds.map((item)=>
  <ul>
              <li key={item._id}> 
  
                <div classNameNameName="adtitle">{item.name}</div> 
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
