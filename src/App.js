import { Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Videos from './component/Videos';
import Upload from './component/Upload';
import Login from './component/Login';
import Signup from './component/Signup';

function App(){
  return(
    <Router>
    <Header/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path='/videos'element={<Videos/>}/>
        <Route path='/upload'element={<Upload/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/signup'element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
} 
export default App