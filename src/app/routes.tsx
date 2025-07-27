import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('@/app/routes/home'),
    errorElement: <div>Error loading home page</div>,
  }
])

export default router;