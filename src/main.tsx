import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './App.tsx'
import UserProfile from './pages/User/UserProfile.tsx';
import BookInProgress from './pages/User/BookInProgress.tsx';
import UserBooks from './pages/User/UserBooks.tsx';
import RachelAgentIntro from './pages/AI/RachelAgentIntro.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

   {/* user profile route */}
  <Route path="dashboard">
    <Route index path='user-profile/:userId' element={<UserProfile />} />
     <Route  path='user-profile/:userId/book/inprogress' element={<BookInProgress />} />
      <Route path='user-profile/:userId/books' element={<UserBooks />} />
  </Route>
   {/* user profile route */}

   {/* RachelAI Agent route */}

    <Route path='create-book' element={<RachelAgentIntro />} />

   {/* RachelAI Agent route */}

   {/* 404 */}
    <Route path="*" element={<NotFound />} />
   {/* 404 */}

    </Routes>
    
  </BrowserRouter>
  </StrictMode>
)
