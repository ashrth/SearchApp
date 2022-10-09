import React, { useEffect, useState } from "react"
import styled from "styled-components"

const SearchContainer = styled.div`
  border: 3px solid lightgray;
  display: flex;
  align-adss: center;
  margin: 25px;
  width: 250px;
  padding: 5px;
`


const Search = () => {
  const [ads, setAds] = useState([])

  useEffect(() => {
    getAds()
  }, [])

  const getAds = async () => {
    let result = await fetch("http://localhost:3000")
    result = await result.json()
    setAds(result)
  }
  console.warn("ads", ads)
  
  
  

  const InputHandle = async (event) => {
    let key = event.target.value
    if(key){
      let result = await fetch(`http://localhost:3000/ads/${key}`)
      result=await result.json()
      setAds(result)
    
    } else{
      getAds()
    }
    

    
  }



  return (
    <div> 
      <h3> All Ads </h3>
      <SearchContainer>
      <input type="" placeholder="Search Ads" onChange={InputHandle} />
      {/* <Search style={{ color: "gray", fontSize: 16 }} /> */}
</SearchContainer>
      <ul> 
        <li> Name </li>
        <li> Headline </li>
      </ul>
      {
        ads.map((item)=>
        <ul> 
        <li> {item.name}</li>
        <li> {item.headline} </li>
      </ul>
        )
      }
    


</div>
  )

  }
export default Search
