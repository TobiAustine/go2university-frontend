import React,{useState, useEffect} from "react";
import styles from "../styles/Signup.module.css";
import {Link} from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import {Helmet} from 'react-helmet'
import signup from "../Images/Signup.png"
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register,reset } from "../features/userSlice/userSlice";
import Spinner from "../components/Spinner";



const Signup = () => {

    const [form, setForm] = useState({
        name:'',
        email:'',
       password:'',
       
    })
     
    const {name, email, password} = form 

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const {user, isLoading, isError, isSuccess, message} = useSelector((state) =>
        state.user
    ) 
     

    useEffect(() => {
    if(isError){
      toast.error(message)

      if(isSuccess || user){
        navigate('/')

        toast.success('Registration Successfull')
      }else{
        toast.error("An error occured")
      }

      dispatch(reset)
    }

    }, [user, isError, isSuccess, message, navigate, dispatch])
    
     
    const onChange = (e) => {
        setForm( (prevState) => ({
          ...prevState, [e.target.name]:e.target.value
        }))
    }
    
    const onSubmit = (e) => {
       e.preventDefault()

       if(!name || !password || !email){
        toast.error("Please fill in all details")
       }else{
          const userData = {name, email,password}

          dispatch(register(userData))
       }
        
    }

   if(isLoading){
    return <Spinner></Spinner>
   }  

  return (
     <>
     <Helmet>
     <title>Sign up | Go2Uni</title>
        <meta name="Sign up" content="Sign up to get going" />
        <link rel="icon" href="/Images/logo.png" />
     </Helmet>


     <div className={styles.Signup}>
        <div className={styles.Signup_container}>

        <div className={styles.Signup_Image}>
            <img src={signup} alt="Signup" width="650vm" height="550px"></img>  
        </div>

        <div className={styles.FormInput}>
           <div className={styles.Signup_bold}>
            Sign Up
            </div>

            <div className={styles.form_center}> 
           <div className={styles.FormInput_text}>

          <form onSubmit={onSubmit}>
               <button type="submit" className={styles.google_box}>
                  <FcGoogle size={24}></FcGoogle> Sign in with Google
                </button>
        
               <div className={styles.Alternative}>
                <div className={styles.HorizontalLine}>
                </div>
                <div className={styles.Alternative_text}>or</div>
                <div className={styles.HorizontalLine}></div>
            </div>

              <dl>
                <dt className={styles.form_text}> Name </dt>
                <dd> <input name="name" className={styles.forms_box} value={name} onChange={onChange}></input> </dd>

                <dt className={styles.form_text}> Email Address </dt>
                <dd width="100%"> <input name="email" type="email" className={styles.forms_box} value={email} onChange={onChange}></input> </dd>

                <dt className={styles.form_text}>Password</dt>
                <dd> <input name="password" type="password" className={styles.forms_box} value={password} onChange={onChange}></input> </dd>
                
                <input name="submit" value="Register" type="submit" className={styles.reg_col}></input>
              </dl>
            </form> 


            <p className= {styles.question}>Already have an account? <Link to='/login'> Log in</Link></p>
            </div>
            </div>


            
        </div>



      </div>
      </div>
   
     
</>

  )
}

export default Signup