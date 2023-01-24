import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { StillnessProvider } from 'react-stillness-component';
import { router } from './router';
import "@/assets/css/reset.css"
import "@/assets/css/style.scss"
import "uno.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StillnessProvider>
      <RouterProvider router={router}/>
    </StillnessProvider>
  </React.StrictMode>,
)