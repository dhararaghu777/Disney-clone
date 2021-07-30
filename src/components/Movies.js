import React from 'react';
import styled from 'styled-components';
import {viewMovie} from '../app/moviesReducer';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Movies(props) {

    const dispatch=useDispatch();
    const history=useHistory();

    const onClickHandler=(id)=>{
        dispatch(viewMovie(id));
        history.push('/details');
    }

    const moviesList=props.data.map(movie=>(
        <Wrap key={movie.id} onClick={()=>onClickHandler(movie.id)}>
            <img src={movie.cardImg} alt=""/>
        </Wrap>
    ))

    return (
        <Container>
            <h4>{props.heading}</h4>
            <Content>
                {moviesList}
            </Content>
        </Container>
    )
}

export default Movies;

const Container=styled.div`
    
`
const Content=styled.div`
    color:white;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
    overflow:hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0 30px 22px -10px;
    }
`