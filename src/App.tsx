import { router } from '@app/routes.tsx';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading Page...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
