import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router';

import { queryClient } from './queryClient';
import { router } from './router';
import { store } from './sotre';

export const Providers: FC = () => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ReduxProvider>
  );
};
