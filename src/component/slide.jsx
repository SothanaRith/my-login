import styled from "styled-components"
import katana from "./img/logo1921.png"
import { sliderItem } from "./data";
import React,{useState} from "react";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;


`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f9f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom:0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;


`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.sliderItem * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const Imgcontainer = styled.div`
  height: 80%;
  width: 10%;
  flex: 1.5;
`;
const Image = styled.img`
  margin-left: 5%;
  height: 80%;
`;
const Info = styled.div`
  flex: 1;
  padding: 50px;  
`;
const Title = styled.h1`
  font-size: 90px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  font-size: 20px;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  border:2px solid #000;
`;

const Slider =()=> {
  const [SlideIndex, setSlideIndex] = useState(0);
  const handleClick =(direction)=>{
    if(direction==="left"){
      setSlideIndex(SlideIndex > 0 ? SlideIndex-1 : 6)
    } else{
      setSlideIndex(SlideIndex < 6 ? SlideIndex+1 : 0 )
    }
  }
       
        return ( 
          <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
              <i className="fa fa-arrow-left" aria-hidden="true" ></i>
            </Arrow>
            {sliderItem.map(item=>(
              <Wrapper sliderItem = {SlideIndex} > 
                <Slide key={item.product_id}>
                  <Imgcontainer>
                    <Image src={item.img}/>
                  </Imgcontainer>
                  <Info>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Link to="/shop"><Button>Find More</Button></Link>
                  </Info>
                </Slide>
              </Wrapper>
            ))}
            <Arrow direction="right" onClick={()=>handleClick("right")}>
              <i className="fa fa-arrow-right" aria-hidden="true" ></i>
            </Arrow>
          </Container>


            
         )
    }

 
export default Slider;