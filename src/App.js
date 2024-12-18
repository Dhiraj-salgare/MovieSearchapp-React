import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route,Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './pages/Home'

import Tag from './pages/Tag'
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';
import Pagi from './components/Pagi';


function App() {
  const[searchParam,setSearchparam]=useSearchParams()
  const location=useLocation()
  const {fetchpost,fetchrelated,input}=useContext(AppContext)

  useEffect(()=>{
  
    
    const page=searchParam.get("page") ?? 1

    
    

    if(location.pathname.includes("ID")){
      const Id=location.pathname.split("/").at(-1);
      fetchrelated(Id)
    }

    else{
      fetchpost(input,Number(page),null)
    }


  },[location.pathname,location.search])

    


  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          
          <Route path='/Id/:id' element={<Tag></Tag>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
