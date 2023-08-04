import {BrowserRouter,Route, Routes,} from 'react-router-dom';
import Home from './components/home.js';
import Login from './components/login.js';
import Registration from './components/registration.js'

function App(){
    return <BrowserRouter>
   
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/components/login.js' element={<Login/>}/>
             <Route path='/components/registration.js' element={<Registration/>}/>
          </Routes>
         </BrowserRouter>

    
}


export default App;
