import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import Explore from './Routes/Explore';
import Blog from './Routes/Blog';
import Signup from './Routes/Signup';
import Signin from './Routes/Signin';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/'element = {<Home/>}/>
        <Route path = '/blog'element = {<Blog/>}/>
        <Route path = '/explore'element = {<Explore/>}/>
        <Route path = "/Sign up" element = {<Signup/>}/>
        <Route path='/Sign in' element = {<Signin/>} /> 
      </Routes>
    </div>
  )
}

export default App;
