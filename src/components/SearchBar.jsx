import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const SearchContainer = styled.div`
  border: 3px solid lightgray;
  display: flex;
  align-adss: center;
  margin: 25px;
  width: 400px;
  padding: 5px;
`
const Button = styled.button`
  border: none;
  padding: 10px;
  margin: 4px;
  background-color: black;
  color: gray;
  cursor: pointer;
  font-weight: 400;
`

const AdsList = () => {
  const [data, setAds] = useState([])

  useEffect(() => {
    getAds()
  }, [])

  const getAds = async () => {
    let result = await fetch("http://localhost:3000/ads")
    result = await result.json()
    setAds(result)
  }
  
  console.warn(data)
  

  const InputHandle = async (event) => {
    let key = event.target.value
    let result = await fetch(`http://localhost:3000/search/${key}`)
    result = await result.json()

    if (result) {
      setAds(result)
    } else {
      getAds()
    }
  }



  return (
    <SearchContainer>
      <input type="" placeholder="Search Ads" onChange={InputHandle} />
      {/* <Search style={{ color: "gray", fontSize: 16 }} /> */}

      <Button> Submit </Button>
    </SearchContainer>
  )

  }
export default AdsList
