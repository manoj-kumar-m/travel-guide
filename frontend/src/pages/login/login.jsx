import React,{useState} from 'react'
import classes from './login.module.css'


const Login = () => {


    const [passwordShown, setPasswordShown] = useState(false);
 
    const [email, setemail] = useState('')
    const [username, setusername] = useState('')
    const [phoneno, setphoneno] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
   
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    const handleemail=(event)=>{
      const getemail= event.target.value;
      setemail(getemail);
      
    }
    const handleusername=(event)=>{
      const getusername= event.target.value;
      setusername(getusername);
      
    } 
      const handlephoneno=(event)=>{
        const getphoneno= event.target.value;
        setphoneno(getphoneno);
        
    }  
    const handlepassword=(event)=>{
      const gepassword= event.target.value;
      setpassword(gepassword);
      
    }
      
  return (
        <div className={classes.mainContainer}>
            <div className={classes.formContainer}>
              <div className={classes.formBody}>

                    <h2 className={classes.title}>Log in </h2>


                  <form action="" className={classes.form} autoComplete="off">
 
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => handleemail(e)} placeholder="Enter your email" />

                        <label for="password">Password</label>
                        <input type={passwordShown ? "text" : "password"} name="password" id="password" onChange={(e) => handlepassword(e)} placeholder="Enter your password" />
                        
                      <div className={classes.checkbox}>
                          <input type="checkbox" onClick={togglePasswordVisiblity} />
                          <span>Show Password</span>
                      </div>

                        <input type="submit" value="Log In" />
                        <div className={classes.formFooter}>
                            <span>Don't have an account?</span> <a href="">Sign Up</a> 
                        </div>    
                    </form>

                </div>
                            

            </div>
        </div>
   

  )
}

export default Login