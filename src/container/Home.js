import React,{ useEffect} from 'react';
import styled from 'styled-components';
import Slider from '../components/ImageSlider';
import Viewers from '../components/Viewers';
import Movies from '../components/Movies';
import db from '../firebase';
import {useSelector, useDispatch} from 'react-redux';
import {addToStore} from '../app/moviesReducer';


function Home() {

    const dispatch=useDispatch();
    const movies=useSelector(state=>state.movie.movies);
    console.log(movies);

    useEffect(()=>{
        db.collection('movies').onSnapshot(snapShot=>{
            let tempMovies= snapShot.docs.map(doc=>{
                 console.log(doc.data());
                return {
                    ...doc.data()
                }
            })

            dispatch(addToStore(tempMovies));
        })
       
    },[]);

    return (
        <Container>
            <Slider />
            <Viewers />
            {movies?
            <>
            <Movies heading="Recommended for you"
                    data={movies.slice(0,4)} />
            <Movies heading="Recently added movies"
                    data={movies.slice(4,8)} />
            <Movies heading="Top rated movies"
                    data={movies.slice(8,12)} />
            <Movies heading="Award winning movies"
                    data={movies.slice(12,16)} />
            </>: null}
        </Container>
    )
}

export default Home;


const Container=styled.main`
    
    min-height: calc(100vh - 70px);
    padding: calc(3.5vw + 5px);
    position:relative;
    overflow-x: hidden;

    &:before{
        content:"";
        position:absolute;
        background: url("images/home-background.png") center center / cover no-repeat fixed;
        left:0;
        top:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
    
`