import './App.css';

// import Home from './pages/home/home';
import Loader from './pages/loading/loader';
import React from 'react'
import  {useState, useEffect} from 'react'
import Userhome from './userhome/userhome';

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
      setLoading(true)
      setTimeout( () => {
        setLoading(false)
      },3000)
  },[])
  
  return (
   
      <>
      {/* {loading ? <Loader /> : <Home />} */}
     
      {loading ?<Loader/>:<Userhome/> }
</>        
   

  )
}


export default App;
