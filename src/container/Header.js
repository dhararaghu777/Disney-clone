import React from 'react';
import styled from 'styled-components';
import {Link, useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {setUser, removeUser} from '../app/userReducer';
import {auth, provider} from '../firebase';

function Header() {
    const history= useHistory();
    const dispatch= useDispatch();
    const user=useSelector(state=>state.users.user);

    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(removeUser());
        })
    }

    return (
        <Nav>
            <Logo src="/images/logo.svg" onClick={()=>{history.push("/")}} />
            {user ?
            ( <>
            <Menu>
                <Link to="/">
                    <img src="/images/home-icon.svg" alt="Home" />
                    <span>HOME</span>
                </Link>
                <Link to="/">
                    <img src="/images/search-icon.svg" alt="Home" />
                    <span>SEARCH</span>
                </Link>
                <Link to="/">
                    <img src="/images/watchlist-icon.svg" alt="Home" />
                    <span>WATCHLIST</span>
                </Link>
                <Link to="/">
                    <img src="/images/original-icon.svg" alt="Home" />
                    <span>ORIGINALS</span>
                </Link>
                <Link to="/">
                    <img src="/images/movie-icon.svg" alt="Home" />
                    <span>MOVIES</span>
                </Link>
                <Link to="/">
                    <img src="/images/series-icon.svg" alt="Home" />
                    <span>SERIES</span>
                </Link>
            </Menu>
            <UserIcon src={user.photoURL} alt="User" onClick={signOut} /> 
            </>) :
                (<LoginButton>
                    {history.location.pathname==='/'?
                    <Link to="/login">LOGIN</Link>: <Link to="/">Home</Link>}
                </LoginButton> )
            }
        </Nav>
    )
}

export default Header;

const Nav=styled.nav`
    height:70px;
    background-color:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
    overflow-x: hidden;
`
const Logo= styled.img`
    width:80px;
    cursor:pointer;
`

const Menu=styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;

    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        text-decoration:none;
        color:white;
        cursor:pointer;
        img{
            height:20px;
        }

        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;

            &:after{
                content:"";
                position:absolute;
                height:2px;
                left:0;
                right:0;
                bottom:-6px;
                background:white;
                opacity:0;
                transform-origin:left center;
                transition:all 250ms cubic-bezier(0.25,0.46,0.65,0.94) 0s;
                transform:scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity:1;
            }
        }
    }
`

const UserIcon=styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;

`

const LoginButton=styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;

    a{
        border: 1px solid #f9f9f9;
        padding: 8px 14px;
        border-radius: 4px;
        color: white;
        background: #000;
        text-decoration: none;
        letter-spacing: 1.3px;
        transition: all 250ms ease;

        &:hover{
            background-color: #f9f9f9;
            border-color: transperant;
            color: #000;
        }
    }
    
    

`