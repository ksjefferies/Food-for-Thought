// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

import { About } from './component/pages/About';
import { Landing } from './component/pages/Landing';
import { Recipe } from './component/pages/Recipe';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;