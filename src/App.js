import './App.css';
import HOME from './pages/home';
import Examples from './pages/examples';
import CONTACT from './pages/contact';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HOME/>}>
        
      </Route>
      
      <Route path='/CONTACT' element={<CONTACT/>}></Route>
      <Route path='/Examples' element={<Examples/>}></Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
