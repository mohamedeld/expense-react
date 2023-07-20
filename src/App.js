
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import { Create, Home, Root } from './Pages';



function App() {
  
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Root/>}>
          <Route index element={<Home/>}/>
          <Route path="create" element={<Create/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
