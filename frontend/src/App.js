import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Cse from './components/gate/Cse';
import Test4 from './components/test1/Test4';
import Ece from './components/gate/Ece';
function App() {
  

  return (
    <>
    {/* <div className='bg-black text-center  font-semibold text-white '><h1>This app is developed by Ajad Reddy Edavelly</h1></div> */}
      <Router>
        <Switch> 
          <Route exact path='/' ><Home/></Route>
          <Route path='/cse'><Cse/></Route>
          <Route path='/ece'><Ece/></Route>
          <Route path='/test4'><Test4/></Route>
          {/* <Route path='/'><LandingPage/></Route> */}
          
        </Switch>
      </Router>
      
    </>
  );
}
  
export default App;
