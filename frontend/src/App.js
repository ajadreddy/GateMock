import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {useEffect, useState } from 'react';
import Cse from './components/gate/Cse';
import Exam from './components/Exam';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Test1 from './components/test1/Test1';
import Test4 from './components/test1/Test4';
// import Test2 from './components/test1/Test2';
// import Test3 from './components/test1/Test3';
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
      <Router>
        <Switch>
          <Route exact path='/' >
          {
              user && user._id ? <Home updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
          </Route>
          <Route path='/cse'><Cse/></Route>
          <Route path='/exam' ><Exam/></Route>
          <Route path='/login' ><Login updateUser={updateUser}/></Route>
          <Route path='/register' ><Register/></Route>
          <Route path='/test1'> <Test1/> </Route>
          <Route path='/test4'><Test4/></Route>
          {/*<Route path='/test2'><Test2/></Route>
          <Route path='/test3'><Test3/></Route> */}
        </Switch>
      </Router>
      
    </>
  );
}
  
export default App;
