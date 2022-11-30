import React, {useState, useEffect} from 'react'
import styles from '../styles/Login.module.css'
import {FcGoogle} from 'react-icons/fc'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import {Helmet} from 'react-helmet'
import fingerprint from '../Images/fingerprint.svg'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login,reset } from "../features/userSlice/userSlice";
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'


const Login = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) =>  state.user ) 


  useEffect(() => {
    if(isError){
      toast.error(message)

      if(isSuccess || user){
        navigate('/')
        toast.success('Login Successful')
      }else{
        toast.error("An error occured")
      }

      dispatch(reset)
    }

    }, [user, isError, isSuccess, message, navigate, dispatch])
  

    

    const [formData, setFormData] = useState({
        email:'',
        password:''
      })
  
      const {email, password} = formData
  
      const onChange = (e) => {
        setFormData( (prevState) => ({
          ...prevState, [e.target.name]:e.target.value
        }))
    }
  
  
  
    const onSubmit = (e) => {
      e.preventDefault()
      
      if (!email || !password) {
        toast.error("Please fill in all details")
      } else {
         const userData = {
        email, password
      }

      dispatch(login(userData))

      toast.success('Login Successful')
      navigate('/department/science')

      setFormData(formData)
      }
      
     
   }
  
  //  const signin = () => {
  //   if ( !formData.email || !formData.password) {
  //     alert('Please fill in all details')
  //   } else {
  //       Axios.post('http://localhost:8000/user/login', {formData}).then(
  //         alert('Login  Successful')
  //       ).catch(
  //         alert('Sorry, an error occured.')
  //       )
  //   }
  // }
  
   if(isLoading){
    return <Spinner></Spinner>
   }


    return (
    <>
    <Helmet>
       <title>Log In | Go2Uni</title>
       <meta name="Log in to Go2Uni" content="Get to know about more fun and interesting ways to prepare for university entrance exams in Nigeria" />
       <link rel="icon" href="/Images/logo.png" />
    </Helmet>

    <div className={styles.login}>
        <div className={styles.login_container}>

        <div className={styles.login_image}>
           <img alt='login' src={fingerprint}></img>
               
        </div>



            <div className={styles.login_text}>
              <div className={styles.text_head}>
                <h2>Welcome Back!</h2>
                <p>Please enter your details.</p>
              </div>


              <div className={styles.text_body}>
                <form action="" onSubmit={onSubmit}>

                <div className={styles.email}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name='email' value={email} onChange={onChange}/>
                </div>


                <div className={styles.password}>
                    <label htmlFor="email">Password</label>
                    <input type="password" name='password' value={password} onChange={onChange}/>
                </div>


                <div className={styles.remember}>
                    
                    <div className={styles.remember_me}>
                    <input type="radio" name="remember me" id="" />
                    <label htmlFor="remember me">Remember Me</label>
                    </div>

                    <div className={styles.forgot_password}>
                      <Link to='/'>Forgot Password?</Link>
                    </div>
                   
                </div>

                <button type="submit" className={styles.signin}>Sign In</button>

                <button type="submit" className={styles.google}>
                  <FcGoogle size={25}></FcGoogle> Sign in with Google
                </button>


                </form>

                <p>Do not have an account? <Link href='/signup'>Sign up here</Link> </p>
              </div>
                
            </div>

        </div>
    </div>

    
    </>
    )


    };
  
  export default Login