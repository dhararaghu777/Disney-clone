import React from 'react';
import styled from 'styled-components';
import VideoPlay from './videoPlay';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <VideoPlay  video="/videos/disney.mp4"
                            image="/images/viewers-disney.png"/>
            </Wrap>
            <Wrap>
                <VideoPlay  video="/videos/marvel.mp4"
                            image="/images/viewers-marvel.png"/>
            </Wrap>
            <Wrap>
               <VideoPlay   video="/videos/pixar.mp4"
                            image="/images/viewers-pixar.png"/>
            </Wrap>
            <Wrap>
               <VideoPlay   video="/videos/national.mp4"
                            image="/images/viewers-national.png"/>
            </Wrap>
            <Wrap>
                 <VideoPlay video="/videos/star-wars.mp4"
                            image="/images/viewers-starwars.png"/>           
            </Wrap>
        </Container>
        
    )
}

export default Viewers;


const Container=styled.div`
    color:white;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
    padding: 30px 0 26px;
    
`

const Wrap=styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transform: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    overflow: hidden;

    &:hover{
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    }

`

