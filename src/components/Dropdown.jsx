import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import styles from '../styles/Dropdown.module.css'
import { deptDropdown } from './NavItems'

const Dropdown = () => {

    const [showSub, setShowSub] = useState(false)

    const handleClick = () => {setShowSub(!showSub)}


  return (
    <>
        <ul className={`${styles.dropdown_menu} ${showSub ? styles.dropdown_menu: styles.dropdown_hidden} `} onClick={handleClick}>
           {/* <li onClick={() => setClick(false)}> <Link to='/department/science' className={styles.dropdown_link}><a>Science</a></Link>  </li> 

           <li onClick={() => setClick(false)}> <Link to='/department/commercial' className={styles.dropdown_link}><a>Commercial</a></Link>  </li> 

           <li onClick={() => setClick(false)}> <Link to='/department/arts' className={styles.dropdown_link}><a> Arts</a></Link>  </li>  */}



          {deptDropdown.map((item, id) =>{
            return(
              <li key={id}>
                  <Link to={item.path} className={item.class} onClick= {() => {setShowSub(false)}}>{item.title}</Link>
              </li>
            )
          })}


        </ul>
    </>
  )
}

export default Dropdown