
import About from '../components/About'
import Categories from '../components/Categories'
import Choice from '../components/Choice'
import Hero from '../components/Hero'
import Reward from '../components/Reward'
import Search from '../components/Search'
import Statistics from '../components/Statistics'
import Subscribe from '../components/Subscribe'
import Testimonial from '../components/Testimonials'
import Trend from '../components/Trend'
import {Helmet} from 'react-helmet'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Go2Uni</title>
        <meta name="description" content="Find more fun and interesting ways to prepare for university entrance exams in Nigeria" />
        <link rel="icon" href="/Images/logo.png" />
        <title>Home | Go2Uni</title>
        </Helmet>

        <Hero></Hero> 
        
         <Statistics></Statistics> 
         
        
         <Categories></Categories> 
         
        
         <Search></Search> 
         
        
         <Trend></Trend>  
         
        
         <Choice></Choice> 
         
        
         <About></About> 
         
        
         <Reward></Reward> 

         <Testimonial></Testimonial>

         <Subscribe></Subscribe>
         
     

      
    </div>
  )
}
