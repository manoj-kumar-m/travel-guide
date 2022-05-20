import React,{useState} from 'react'
import classes from './register.module.css'


const Register = () => {


    const [passwordShown, setPasswordShown] = useState(false);
 
     
   
        const togglePasswordVisiblity = () => {
          setPasswordShown(passwordShown ? false : true);
        };
      
  return (
        <div className={classes.mainContainer}>
            <div className={classes.formContainer}>
              <div className={classes.formBody}>

                    <h2 className={classes.title}>Register </h2>


                  <form action="" className={classes.form} autoComplete="off">
 
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email"  required/>

                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" required/>
                        
                        <label for="phoneno">Phone</label>
                        <input type="tel" name="phone" id="phone" placeholder="Phone" required/>
            
                        <label for="password">Password</label>
                        <input type={passwordShown ? "text" : "password"} name="password" id="password" placeholder="Password" required/>

                        <label for="confirmpassword">Confirm Password</label>
                        <input type={passwordShown ? "text" : "password"} name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" required/>
                        
                      <div className={classes.checkbox}>
                          <input type="checkbox" onClick={togglePasswordVisiblity} required/>
                          <span>Show Password</span>
                      </div>

                        <input type="submit" value="register" />
                        <div className={classes.formFooter}>
                            <span>Already have an account?</span> <a href="../login/login.jsx">Log In</a> 
                        </div>    
                    </form>

                </div>
                            

            </div>
        </div>
   

  )
}

export default Register