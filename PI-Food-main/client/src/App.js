// import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom'; //add useLocations
// This hook useLocation returns the current location object. This can be useful if you'd like to perform some side effect whenever the current location changes.
import {  Home, Landing } from './pages/index.js';    //add Detail, Form,
// import NavBar from './components/NavBar/NavBar.jsx'

function App() {
  // const location = useLocation (); //the constant who contains de hook - then we use this constant in pathname for NavBar be in all pages
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element= {<Landing />}/>
        <Route path='/home' element= { <Home />}/>
        
      </Routes> 
    </div>   
  );
}

export default App;
/* <Route path='/form' element= { <Form />}/> */
/* <Route path='/detail/:id' element= { <Detail />}/> */
//    { location.pathname !== '/' && <NavBar />} 