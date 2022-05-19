import './App.css';

// import Home from './pages/home/home';
import Loader from './pages/loading/loader';
import React from 'react'
import  {useState, useEffect} from 'react'
import Userhome from './pages/userhome/userhome';
// import Choose from './AllComponents/featuredComponents/choose/choose';

// import Map from './AllComponents/featuredComponents/map/map';
import Features from './pages/featured/featured';
// import Userhome from './pages/userhome/userhome';
// import Priceplan from './pages/priceplan/priceplan';


const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
      setLoading(true)
      setTimeout( () => {
        setLoading(false)
      },1000)
  },[])
  
  return (
   
      <>
      {/* {loading ? <Loader /> : <Home />} */}
     
      {loading ?<Loader/> : <> <Userhome/> </>}
    </>        
   

  )
}


export default App;
