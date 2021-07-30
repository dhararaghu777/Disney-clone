import React,{Suspense} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {GrAdd} from 'react-icons/gr';


function Details() {

    const movieId=useSelector(state=>state.movie.viewMovie);
    const movies=useSelector(state=>state.movie.movies);

    const index=movies.findIndex(item=>(item.id===movieId));
    const movie=movies[index];

    return (
        <Container>
          <Suspense fallback={<h1>Loading</h1>}>
            <Background>
                <img src={movie.backgroundImg} alt=""/>
            </Background>
            <ImageTitle>
                <img src={movie.titleImg} alt=""/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt=""/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt=""/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <GrAdd />
                </AddButton>
                <GroupButton>
                    <img src="/images/group-icon.png" alt=""/>
                </GroupButton>
            </Controls>
            <Subtitles>
                {movie.subTitle}
            </Subtitles>
            <Description>
                {movie.description}
            </Description>
         </Suspense>
        </Container>
    )
}

export default Details;


const Container=styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background=styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle=styled.div`
    height: 30vh;
    min-height: 170px;
    width: 30vw;
    min-width: 200px;
    margin: 30px 0;

    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

const Controls=styled.div`
    display: flex;
    align-items: center;
`

const PlayButton=styled.button`
    display: flex;
    align-items: center;
    border-radius: 4px;
    font-size: 15px;
    height: 56px;
    padding: 0 24px;
    margin-right: 22px;
    border: none;
    background: rgb( 249, 249, 249);
    letter-spacing: 1.2px;
    cursor: pointer;

    &:hover{
        background: rgb( 198, 198, 198);
    }
`

const TrailerButton=styled(PlayButton)`
    background: rgba( 0, 0, 0, 0.3);
    border: 1px solid rgb( 249, 249, 249);
    color: rgb(249, 249, 249);

   

`

const AddButton=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    width: 44px;
    border: 1px solid white;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    margin-right: 22px;
    cursor: pointer;
    background: white;

    svg{
        color: white;
        font-size: 30px;
        
    }

    &:hover{
        background: rgb( 198, 198, 198);
    }
`

const GroupButton=styled(AddButton)`
    background: rgb(0, 0, 0);
`

const Subtitles=styled.div`
    font-size: 15px;
    margin-top: 26px;
    min-height: 20px;
    color: rgb(249, 249, 249);
`

const Description=styled.div`
    color: rgb(249, 249, 249);
    line-height: 1.4;
    margin-top: 26px;
    font-size: 20px;
    max-width: 760px;
    text-align: justify;
`