import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {useEffect, useState } from 'react';
import Cse from './components/gate/Cse';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Test4 from './components/test1/Test4';
import LandingPage from './components/test1/LandingPage';
import Test5 from './components/test1/Test5';
import Profile from './components/Profile';
import Ece from './components/gate/Ece';
function App() {
  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])


  const updateUser = (user) => { 
    if(user){
      localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
    }
  }

  return (
    <>
    {/* <div className='bg-black text-center  font-semibold text-white '><h1>This app is developed by Ajad Reddy Edavelly</h1></div> */}
      <Router>
        <Switch> 
          <Route exact path='/home' >
          {
              user && user._id ? <Home updateUser={updateUser} /> : <Login updateUser={updateUser}/>
          }
          </Route>
          <Route path='/cse'><Cse/></Route>
          <Route path='/ece'><Ece/></Route>
          <Route path='/login' ><Login updateUser={updateUser}/></Route>
          <Route path='/register' ><Register/></Route>
          <Route path='/test4'><Test4/></Route>
          <Route path='/test5'><Test5/></Route>
          <Route path='/profile'> <Profile/> </Route>
          <Route path='/'><LandingPage/></Route>
          
        </Switch>
      </Router>
      
    </>
  );
}
  
export default App;
