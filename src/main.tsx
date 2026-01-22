import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './App.tsx'
import UserProfile from './pages/User/UserProfile.tsx';
import BookInProgress from './pages/User/BookInProgress.tsx';
import UserBooks from './pages/User/UserBooks.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

   {/* user profile route */}
  <Route path="dashboard">
    <Route index path='profile/:userId' element={<UserProfile />} />
     <Route  path='profile/:userId/book/inprogress' element={<BookInProgress />} />
      <Route path='profile/:userId/books' element={<UserBooks />} />
  </Route>
   {/* user profile route */}

    </Routes>
    
  </BrowserRouter>
  </StrictMode>
)
