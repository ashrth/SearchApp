import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom';

const SearchContainer = styled.div`
  border: 3px solid lightgray;
  display: flex;
  align-adss: center;
  margin: 25px;
  width: 250px;
  padding: 5px;
`
const AdsContainer = styled.div`
  
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
    let result = await fetch("http://localhost:5000/ads")
    result = await result.json()
    setAds(result)
  }
 
  
  
  

  const InputHandle = async (event) => {
    let key = event.target.value
    if(key){
      let result = await fetch(`http://localhost:5000/ads/${key}`)
      result=await result.json()
      setAds(result)
    
    } else{
      getAds()
    }
    

    
  }



  return (
    <div>
    <SearchContainer>
      <input type="" placeholder="Search Ads" onChange={InputHandle} />
      {/* <Search style={{ color: "gray", fontSize: 16 }} /> */}
</SearchContainer>
    <AdsContainer> 
     

      {
        ads.map((item)=>
        <ul key={item.id}> 
          
        <div >{item.name}</div> 
        <div> {item.headline} </div>
      </ul>
        )
      }
    
    </AdsContainer>
    </div>
  )

  }
export default Search
