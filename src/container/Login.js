import React from 'react';
import styled from 'styled-components';
import {auth, provider} from '../firebase';
import { useDispatch} from 'react-redux';
import {setUser} from '../app/userReducer';
import {useHistory} from 'react-router-dom';

function Login(){

    const history=useHistory();
    const dispatch=useDispatch();

    const onSignup=()=>{
       auth.signInWithPopup(provider).then(res=>{
           console.log(res);
           dispatch(setUser(res.user));
           history.replace('/');
        }).catch(err=>{
            console.log(err);
        })
    }


    return (
        <Container>
            <Content>
                <LogoOne src="/images/cta-logo-one.svg" alt="" />
                <SignUp onClick={onSignup} >GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 05/26/21, the price of Disney+ and The Disney Bundle will increase by Rs.100
                </Description>
                <LogoTwo src="/images/cta-logo-two.png"/>
            </Content>
        </Container>
    )
}

export default Login

const Container=styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0,0.3);
    

    &:before{
        content:"";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
    }
`

const Content=styled.div`
    max-width: 700px;
    width: 90%;
    padding: 10px 40px 100px 40px;
    display: flex;
    flex-direction: column;
    
    

`

const LogoOne=styled.img`

`

const SignUp=styled.div`
    text-decoration: none;
    color: white;
    background-color: #0063e5;
    padding: 17px 0;
    text-align: center;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin: 10px 0;
    transition: all 250ms;
    letter-spacing: 1.4px;

    &:hover{
        background: #0483ee;
    }
`

const Description=styled.p`
    font-size: 11px;
    line-height: 1.5;
    letter-spacing: 1.4px;
    color: rgb(249, 249, 249);
    text-align: center;
`

const LogoTwo=styled.img`
    margin: 8px 0;
    padding: 0 15px;

`