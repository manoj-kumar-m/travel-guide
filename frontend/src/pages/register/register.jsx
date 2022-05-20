import React,{useState} from 'react'
import classes from './register.module.css'
import axios from 'axios'

const Register = () => {

//---------------------show password---------------------------

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

//---------------------post info-------------------------------

    const [email, setemail] = useState('')
    const [username, setusername] = useState('')
    const [phoneno, setphoneno] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
     
    const handleemail=(event)=>{
      const getemail= event.target.value;
      setemail(getemail);
      
      onInputChange(event)

    }
    const handleusername=(event)=>{
      const getusername= event.target.value;
      setusername(getusername);

      onInputChange(event)
    
    } 
  
    const handlephoneno=(event)=>{
      const getphoneno= event.target.value;
      setphoneno(getphoneno);

      onInputChange(event)
      
    }  
  
    const handlepassword=(event)=>{
      const gepassword= event.target.value;
      setpassword(gepassword);
      
      onInputChange(event)
     

  }
  
    const handleconfirmpassword=(event)=>{
      const getconfirmPassword= event.target.value;
      setconfirmPassword(getconfirmPassword);

      onInputChange(event)
      
    }
    const handleSubmit = (event) => {
      event.preventDefault()

      const registered = {
        email: email,
        username: username,
        phoneno: phoneno,
        password: password ,
        confirmPassword: confirmPassword,
      }

      {
        password === confirmPassword &&
        axios.post('http://localhost:8000/app/register', registered)
        .then(res => console.log(res.data))
      }

          setemail=''
          setusername= ''
          setphoneno=''
          setpassword='' 
          setconfirmPassword= ''
      
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
          case "username":
            if (!value) {
              stateObj[name] = "Please enter Username.";
            }
            break;
          case "phoneno":
              if (!value) {
                stateObj[name] = "Please enter Phone Number.";
              }
              break;
          case "password":
            if (!value) {
              stateObj[name] = "Please enter Password.";
            } else if (input.confirmPassword && value !== input.confirmPassword) {
              stateObj["confirmPassword"] = "Password does not match.";
            } else {
              stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
            }
            break;
     
          case "confirmPassword":
            if (!value) {
              stateObj[name] = "Please enter Confirm Password.";
            } else if (input.password && value !== input.password) {
              stateObj[name] = "Password does not match.";
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

                    <h2 className={classes.title}>Register </h2>


                  <form  className={classes.form} autoComplete="off" onSubmit={(e) => handleSubmit(e)} >
 
                        <label for="email">Email</label>
                        <input type="email" value={input.email} name="email" id="email" placeholder="Email" onChange={(e) => handleemail(e)} onBlur={validateInput} />
                        {error.email && <span className={classes.err}>{error.email}</span>}
              
                        <label for="username">Username</label>
                        <input type="text" value={input.username} name="username" id="username" placeholder="Username"  onChange={(e) => handleusername(e)} onBlur={validateInput}/>
                        {error.username && <span className={classes.err}>{error.username}</span>}

                        
                        <label for="phoneno">Phone</label>
                        <input type="text" value={input.phoneno} name="phoneno" id="phoneno" placeholder="Phone" onChange={(e) => handlephoneno(e)} onBlur={validateInput}/>
                        {error.phoneno && <span className={classes.err}>{error.phoneno}</span>}
              
                        <label for="password">Password</label>
                        <input type={passwordShown ? "text" : "password"} value={input.password}  name="password" id="password" placeholder="Password" onChange={(e) => handlepassword(e)} onBlur={validateInput}/>
                        {error.password && <span className={classes.err}>{error.password}</span>}
              
                        <label for="confirmPassword">Confirm Password</label>
                        <input type={passwordShown ? "text" : "password"} value={input.confirmPassword} name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" onChange={(e) => handleconfirmpassword(e)} onBlur={validateInput} />
                        {error.confirmPassword && <span className={classes.err}>{error.confirmPassword}</span>}
              
                      <div className={classes.checkbox}>
                          <input type="checkbox" onClick={togglePasswordVisiblity} />
                          <span>Show Password</span>
                      </div>

                        <input type="submit" value="register" />
                    </form>
                        <div className={classes.formFooter}>
                            <span>Already have an account?</span> <a href="../login/login.jsx">Log In</a> 
                        </div>    

                </div>
                            

            </div>
        </div>
        </div>

  )
}

export default Register