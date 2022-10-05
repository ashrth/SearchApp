import styled from "styled-components"

import {ads} from "../adsdata"

import ShowAds from "./adsdes"



const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

const Advertisements = () => {
  return (
    <Container>
      {ads.map((item) => (
        <ShowAds item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Advertisements
