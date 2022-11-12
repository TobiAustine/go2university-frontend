import styles from '../styles/Footer.module.css'
import {Link} from 'react-router-dom'
import {FaGraduationCap} from "react-icons/fa"
import {BsTelephone, BsGlobe} from 'react-icons/bs'
import {AiFillMail} from 'react-icons/ai'

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className={styles.footer}> 
    <div className={styles.footer_container}>
        <div className={styles.footer_top}>
           

        <div className={styles.footer_item}>
        <div className={` ${styles.logo} ${styles.footer_head}`}>
        <div className={styles.logo_icon}>
            <Link to="/"><a > <FaGraduationCap size={40}></FaGraduationCap></a></Link>
        </div>
 
        <div className={styles.logo_text}>
          
     <Link to="/"><a href=""><h2>GO<span style={{color:'white', fontSize:'1.2rem'}}>2</span>UNI</h2></a></Link> 
        </div>

        </div>

        <div className={styles.footer_text}>
            <p>Get fun ways to prepare for your WASSCE, NECO and UTME exams</p>

            <div className={styles.footer_phone}>
                 <a href="tel:+2348066821089" rel='noreferrer noopener'>
                    <BsTelephone></BsTelephone>
                    <div className={styles.phone_no}>+2348066821089
                    </div> 
                </a>
            </div>

            <div className={styles.footer_mail}> 
             <a href="mailto:austineosiene@gmail.com" target='_blank' rel='noreferrer noopener' ><AiFillMail ></AiFillMail>
            <div className={styles.email}>contactus@gmail.com</div>
            </a>
        </div>

        </div>


        </div>

        <div className={styles.footer_item}>
        <div className={styles.footer_head}>
            <h2>Department</h2>
        </div>

        <div className={styles.footer_list}>
            <Link href='/'>Science</Link>
            <Link href='/'>Commercial</Link>
            <Link href='/'>Art</Link>
        </div>



        </div>


        <div className={styles.footer_item}>
        <div className={styles.footer_head}>
            <h2>Resources</h2>
        </div>
        <div className={styles.footer_list}>
                <Link href='/'>Help Centre</Link>
                <Link href='/'>Newsletter</Link>
                <Link href='/'>Blog</Link>
                <Link href='/'>Testimonials</Link>
        </div>
        </div>

        <div className={styles.footer_item}>
            <div className={styles.footer_head}>
                <h2>Company</h2>
            </div>
            <div className={styles.footer_list}>
                    <Link href='/'>About Us</Link>
                    <Link href='/'>Contact Us</Link>
                    <Link href='/'>FAQs</Link>
                
            </div>
        </div>
        </div>

        <div className={styles.footer_language}>
            <BsGlobe></BsGlobe>
            <select name="language" id="">
                <option value="English">English</option>
                <option value="Yoruba">Yoruba</option>
                <option value="Igbo">Igbo</option>
                <option value="Hausa">Hausa</option>
            </select>
        </div>


        <div className={styles.footer_bottom}>
            <div className={styles.terms}>
                <Link href='/'>Terms of Service</Link>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {date} <Link href='/'>Go2Uni.com</Link> | All rights reserved</p>
            </div>
        </div>

        </div>  

    </div>
  )
}

export default Footer