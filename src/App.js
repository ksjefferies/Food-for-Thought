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
import { Contact } from "./pages/Contact";
import UserProvider from "./utils/UserContext";

function App() {
  const queryClient = new QueryClient()
  return (
    <ChakraProvider >
      <UserProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/recipe' element={<Recipe />} />
            <Route path='/recipe/:id' element={<RecipeIdv />} />
            <Route path='/about' element={<About />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;