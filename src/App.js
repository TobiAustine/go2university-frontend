import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contactus';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Provider} from 'react-redux'
import {store} from './features/store' 
import Science from './pages/Science';

function App() {
  return (
    <>
    <Provider store={store}>
  <BrowserRouter>
    <Layout>


    <Routes>
      
    <Route path='/' element={<Home></Home>}/>  
    <Route path='/login' element={<Login></Login>} />
    <Route path='/signup' element={<Signup></Signup>} />
    <Route path='/about' element={<About></About>} />
    <Route path='/contact' element={<Contact></Contact>} />
    <Route path='/department/science' element={<Science></Science>} />
      
      
    </Routes>      
    
    </Layout>
    </BrowserRouter>
    <ToastContainer></ToastContainer>
    </Provider>
    </>
  );
}

export default App;
