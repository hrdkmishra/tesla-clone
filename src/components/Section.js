import React from 'react'
import styled from 'styled-components'

function Section(props) {
    console.log(props)
    return (
        <Container bgImage={props.bgImage}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>{props.leftBtnText}</LeftButton>
                <RightButton>{props.rightBtnText}</RightButton>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
        </Container>
    )
}

export default Section

const Container = styled.div`
    background-color: blue;
    width: 100%;
    height: 100vh;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    background-position: center;
    background-size: cover ;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-type: y mandatory;
    overflow: auto;
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-type: mandatory;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex-grow: 1;
    
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;

`
const LeftButton = styled.div`
    background-color:  rgba(23,26,0.8);
    height:40px;
    width: 256px;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 1;
    margin: 8px;
    cursor: pointer;
    padding : 4px 24px;
    text-align: center;
    font-weight: 600;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity:1;
    font-weight:600;
    
`
const DownArrow = styled.img`
    height:40px;
    animation: animateDown infinite 1.5s;
    margin-bottom: 50px;
`

