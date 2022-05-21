import React from 'react'
import classes from './header.module.css';
// import ReactDOM from "react-dom/client";
import { NavLink } from "react-router-dom";
const Header = () => {

  return (
      <>
         <div className={classes.header}>
              <div className={classes.container}>
                    <a href="/"><img src="./assets/triptok.png" alt="Travel Guide Logo"/></a>
                    <NavLink exact to='/login' ><button className={classes.loginBtn} > Login</button></NavLink>  
              </div>
              <h1>Travel Across The Globe</h1>
              <p>Happy and Safe Journey</p>
              
              <div className={classes.inputGroup}>
            
                    <input type="text" className={classes.formControl} placeholder="search location" />
                  <div className={classes.inputGroupAppend}>
                      <button type="submit"  className={classes.inputGroupText} >Search</button>
                  </div>
              </div> 
        </div>
      
        
      </>
    
  )
}

export default Header


