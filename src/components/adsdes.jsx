import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin: 5px;
  width:50vw;
  height: 50vh;
  position: relative;
`

const Image = styled.img`
  width: 1000%;
  
  object-fit: cover;
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Headline = styled.h6`
  color: black;
  margin-bottom: 10px;
`

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: black;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`

const ShowAds = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Headline>{item.headline}</Headline>
        <Button> Know More</Button>
      </Info>
    </Container>
  )
}

export default ShowAds
