// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

import { About } from './component/pages/about';
import { Landing } from './component/pages/landing';
import { Recipe } from './component/pages/recipe';

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