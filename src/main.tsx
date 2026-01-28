import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './App.tsx'
import NotFound from './pages/NotFound/NotFound.tsx';

// import Flow1 from './pages/AI/Flow1.tsx';
// import Flow2 from './pages/AI/Flow2.tsx';
// import Flow3 from './pages/AI/Flow3.tsx';
// import Flow4 from './pages/AI/Flow4.tsx';
// import Flow5 from './pages/AI/Flow5.tsx';
// import Flow6 from './pages/AI/Flow6.tsx';
// import Flow7 from './pages/AI/Flow7.tsx';
// import Flow8 from './pages/AI/Flow8.tsx';
// import Flow9 from './pages/AI/Flow9.tsx';
// import Flow10 from './pages/AI/Flow10.tsx';

// import Flow11 from './pages/AI/Flow11.tsx';
// import Flow12 from './pages/AI/Flow12.tsx';
// import Flow13 from './pages/AI/Flow13.tsx';
// import Flow14 from './pages/AI/Flow14.tsx';
// import Flow15 from './pages/AI/Flow15.tsx';
// import Flow16 from './pages/AI/Flow16.tsx';
// import Flow17 from './pages/AI/Flow17.tsx';
// import Flow18 from './pages/AI/Flow18.tsx';
// import Flow19 from './pages/AI/Flow19.tsx';
// import Flow20 from './pages/AI/Flow20.tsx';
// import Flow21 from './pages/AI/Flow21.tsx';
// import Flow22 from './pages/AI/Flow22.tsx';
// import Flow23 from './pages/AI/Flow23.tsx';
// import Flow24 from './pages/AI/Flow24.tsx';
// import Flow25 from './pages/AI/Flow25.tsx';
// import Flow26 from './pages/AI/Flow26.tsx';
// import Flow27 from './pages/AI/Flow27.tsx';
// import Flow28 from './pages/AI/Flow28.tsx';
// import Flow29 from './pages/AI/Flow29.tsx';
// import Flow30 from './pages/AI/Flow30.tsx';
// import Flow31 from './pages/AI/Flow31.tsx';
// import Flow32 from './pages/AI/Flow32.tsx';
// import Flow33 from './pages/AI/Flow33.tsx';
// import Flow34 from './pages/AI/Flow34.tsx';

import CheckoutPage from './pages/Checkout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

   {/* RachelAI Agent route */}

    {/* <Route path='/flow-1' element={<Flow1 />} />
    <Route path='/flow-2' element={<Flow2 />} />
    <Route path='/flow-3' element={<Flow3 />} />
    <Route path='/flow-4' element={<Flow4 />} />
    <Route path='/flow-5' element={<Flow5 />} />
    <Route path='/flow-6' element={<Flow6 />} />
    <Route path='/flow-7' element={<Flow7 />} />
    <Route path='/flow-8' element={<Flow8 />} />
    <Route path='/flow-9' element={<Flow9 />} />
    <Route path='/flow-10' element={<Flow10 />} />
    <Route path='/flow-11' element={<Flow11 />} />
    <Route path='/flow-12' element={<Flow12 />} />
    <Route path='/flow-13' element={<Flow13 />} />
    <Route path='/flow-14' element={<Flow14 />} />
    <Route path='/flow-15' element={<Flow15 />} />
    <Route path='/flow-16' element={<Flow16 />} />
    <Route path='/flow-17' element={<Flow17 />} />
    <Route path='/flow-18' element={<Flow18 />} />
    <Route path='/flow-19' element={<Flow19 />} />
    <Route path='/flow-20' element={<Flow20 />} />
    <Route path='/flow-21' element={<Flow21 />} />
    <Route path='/flow-22' element={<Flow22 />} />
    <Route path='/flow-23' element={<Flow23 />} />
    <Route path='/flow-24' element={<Flow24 />} />
    <Route path='/flow-25' element={<Flow25 />} />
    <Route path='/flow-26' element={<Flow26 />} />
    <Route path='/flow-27' element={<Flow27 />} />
    <Route path='/flow-28' element={<Flow28/>} />
    <Route path='/flow-29' element={<Flow29 />} />
    <Route path='/flow-30' element={<Flow30/>} />
    <Route path='/flow-31' element={<Flow31 />} />
    <Route path='/flow-32' element={<Flow32 />} />
    <Route path='/flow-33' element={<Flow33 />} />
    <Route path='/flow-34' element={<Flow34 />} /> */}

   {/* RachelAI Agent route */}

   {/* checkout */}
   <Route path='/checkout' element={<CheckoutPage/>} />

   {/* checkout */}

   {/* 404 */}
    <Route path="*" element={<NotFound />} />
   {/* 404 */}

    </Routes>
    
  </BrowserRouter>
  </StrictMode>
)
