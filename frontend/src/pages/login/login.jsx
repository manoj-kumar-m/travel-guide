import React,{useState} from 'react'
import classes from './login.module.css'
import axios from 'axios' 
import { NavLink } from 'react-router-dom';

const Login = () => {


    const [passwordShown, setPasswordShown] = useState(false);

   
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
  };
  


 
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

      const handleemail=(event)=>{
      const getemail= event.target.value;
      setemail(getemail);

      onInputChange(event)
      
    }
    
    
     
    const handlepassword=(event)=>{
      const gepassword= event.target.value;
      setpassword(gepassword);

      onInputChange(event)

      
    }
    const handleSubmit = (event) => {
      event.preventDefault()

      const logged = {
        email: email,
        password: password ,
      
      }
      console.log(logged)
        axios.post('http://localhost:8000/app/login', logged)
          .then(res => alert(res.data.message))
          
          // setemail=""
          // setpassword=""
          
  }


  // -------------------------- validations -----------------------------------

    const [input, setInput] = useState({
      email:'',
      username: '',
      phoneno:'',
      password: '',
      confirmPassword: ''
    });

    const [error, setError] = useState({
      email:'',
      username: '',
      phoneno:'',
      password: '',
      confirmPassword: ''
    })


    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
    }
    

    const validateInput = e => {
      let { name, value } = e.target;
      setError(prev => {
        const stateObj = { ...prev, [name]: "" };
    
        switch (name) {
          case "email":
            if (!value) {
              stateObj[name] = "Please enter Email.";
            }
            break;
          
        
          case "password":
            if (!value) {
              stateObj[name] = "Please enter Password.";
            }
            break;
    
        
          default:
            break;
        }
    
        return stateObj;
      });
    }



  return (
    <div className={classes.regBody}>
        <div className={classes.mainContainer}>
            <div className={classes.formContainer}>
              <div className={classes.formBody}>

                    <h2 className={classes.title}>Log in </h2>


                  <form action="" className={classes.form} autoComplete="off" onSubmit={(e)=> handleSubmit(e)} >
 
                        <label for="email">Email</label>
                        <input type="email" value={input.email} name="email" id="email" onChange={(e) => handleemail(e)} onBlur={validateInput} placeholder="Enter your email" />
                        {error.email && <span className={classes.err}>{error.email}</span>}

                        <label for="password">Password</label>
                        <input type={passwordShown ? "text" : "password"} value={input.password} name="password" id="password" onChange={(e) => handlepassword(e)} onBlur={validateInput} placeholder="Enter your password" />
                        {error.password && <span className={classes.err}>{error.password}</span>}
                        
                        <div className={classes.checkbox}>
                            <input type="checkbox" onClick={togglePasswordVisiblity} />
                            <span>Show Password</span>
                        </div>

              <NavLink exact to='/home' >       
                <input className={classes.login} type="submit" value="Log In" />
              </NavLink>
                        <div className={classes.formFooter}>
                            <span>Don't have an account?</span> <a href="">Sign Up</a> 
                        </div>    
                    </form>

                </div>
                            

            </div>
        </div>
   </div>

  )
}

export default Login 