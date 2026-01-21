import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './App.tsx'
import UserProfile from './pages/User/UserProfile.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

   {/* user profile route */}
  <Route path="dashboard">
    <Route index path='profile/:userId' element={<UserProfile />} />
  </Route>
   {/* user profile route */}

    </Routes>
    
  </BrowserRouter>
  </StrictMode>
)
