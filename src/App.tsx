import './App.css';

import { RouterProvider } from 'react-router-dom'
import router from '@/app/routes.tsx';
import { Suspense } from 'react'; // Optional toast notifications

const Fallback = () => {
  return <div>Loading...</div>
}

function App() {
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <div className="app">
          <RouterProvider router={router} />
        </div>
      </Suspense>
    </>
  )
}

export default App

