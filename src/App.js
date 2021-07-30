import React,{useEffect} from 'react';
import './App.css';
import Header from './container/Header';
import Home from './container/Home';
import Details from './container/Details';
import Login from './container/Login';
import {BrowserRouter as Router, Switch, Link, Route,Redirect} from 'react-router-dom';
import {auth} from './firebase';
import {setUser, removeUser} from './app/userReducer';
import {useSelector,useDispatch} from 'react-redux';
import VideoPlay from './components/videoPlay';



function App() {
  const dispatch= useDispatch();
  const user=useSelector(state=>state.users.user);

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        // console.log(user)
        dispatch(setUser(user))
      }
      else{
        dispatch(removeUser());
      }
    })
  },[])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/video" >
            <VideoPlay />
          </Route>
          <Route path="/login">
            {!user ? 
            <>
            <Header />
            <Login />
            </> : <Redirect to="/"/>}
            
          </Route>
          <Route path="/details" >
            <Header />
            <Details />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
