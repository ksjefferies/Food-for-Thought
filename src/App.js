// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from "react-query";
import { About } from './pages/About';
import { Landing } from './pages/Landing';
import { Recipe } from './pages/Recipe';
import { RecipeIdv } from './pages/RecipeIdv';
import { MyPage } from './pages/MyPage';

function App() {
  const queryClient = new QueryClient()
  return (
    <ChakraProvider >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/recipe' element={<Recipe />} />
            <Route path='/recipe/:id' element={<RecipeIdv />} />
            <Route path='/about' element={<About />} />
            <Route path='/mypage' element={<MyPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;