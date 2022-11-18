import styles from '../styles/NavBar.module.css'
import {Link, useNavigate} from 'react-router-dom'
import {IoIosArrowDown, IoMdClose, IoIosArrowUp} from 'react-icons/io'
import {FaGraduationCap} from 'react-icons/fa'
import {useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {GrFormClose} from 'react-icons/gr'
import { useEffect } from 'react'
import { BsGlobe} from 'react-icons/bs'
import Dropdown from './Dropdown'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/userSlice/userSlice'


const Navbar = () => {

    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.user)


    const [mobileMenu, setMobileMenu] = useState(false)

const  toggleMenuIcon = () => {
     setMobileMenu(prevState => !prevState)
     }

     //navbar scroll in active state
     const [navbar, setNavbar] = useState(false)

     //function to change navbar bg-color on scroll
     const changeBackground = () => {
        if (window.scrollY >= 40){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
     }

     useEffect(() => {
       changeBackground()
       window.addEventListener('scroll', changeBackground)}
       )


            
   
     const [dropdown, setDropdown] = useState(false)

      const toggleDropdown = () => {
        console.log('clicked')
             setDropdown(!dropdown)  
      }

    //  const onMouseEnter = () => {
    //      if(window.innerWidth < 1024){
    //          setDropdown(false)
    //          console.log('no')
    //      }else{
    //          setDropdown(true)

    //      }
    //     setDropdown(true)
    //  }

    //  const onMouseEnter = () => {
    //     setDropdown(true)
    //  }

    //  const onMouseLeave = () => {
    //     setDropdown(false)
    //  }

    //  const onMouseLeave = () => {
    //     if(window.innerWidth < 1024){
    //         setDropdown(false)
    //         console.log('yes')
    //     }else{
    //         setDropdown(false)
    //     } 
    //     setDropdown(false)
    //  }

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
     <div className={` ${styles.navbar}   ${navbar ?  styles.navbar_active : styles.navbar}`}>

        <div className={styles.logo}>
        <div className={styles.logo_icon}>
            <Link to="/"><a > <FaGraduationCap size={40}></FaGraduationCap></a></Link>
        </div>

        <div className={styles.logo_text}>
          
            <Link to="/"><a href=""><p>GO<span>2</span>UNI</p></a></Link> 
        </div>

        </div>



        <div className={` ${styles.nav_menu} ${mobileMenu ? styles.mobile_nav_menu : styles.mobile_nav_menu_hidden} `}>
            <ul>
                <li onClick={() => setMobileMenu(false)}> <Link to='/'>Home</Link> </li>


                <li onClick={() => setMobileMenu(false)}> <Link to='/about'>About Us</Link></li>


                <li className={styles.category}  onClick={toggleDropdown}> Departments <IoIosArrowDown className={styles.arrow}></IoIosArrowDown>
                {dropdown &&
                
                <Dropdown onClick={() => setMobileMenu(false)}></Dropdown>
                
                
                }
                
                
                
                 </li>


                <li onClick={() => setMobileMenu(false)}> <Link to='/contact'>Contact Us</Link></li>
            </ul>

            
        <div className={styles.nav_cta} onClick={() => setMobileMenu(false)}>

        {user ? <button className={styles.login} onClick = {onLogout}>
            Log Out
        </button> :  <>
        
         <Link to='/signup'><a className={styles.sign_up}>Sign Up</a></Link>
                <Link to='/login'><a className={styles.login}> Log In</a></Link>
        
        </>  }
               

        </div>

        <div className={styles.navbar_language} onClick={() => setMobileMenu(false)}>
            <BsGlobe size={15}></BsGlobe>
            <select name="language" id="">
                <option value="English">English</option>
                <option value="Yoruba">Yoruba</option>
                <option value="Igbo">Igbo</option>
                <option value="Hausa">Hausa</option>
            </select>
        </div>


        </div>



 <div className={styles.nav_icons} onClick={toggleMenuIcon}>
             {mobileMenu ? <IoMdClose size ={40} /> : <HiMenuAlt3 size = {40}/>} 
            
        </div>




    </div>
  )
}

export default Navbar