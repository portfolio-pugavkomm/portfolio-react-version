import { BaseLayout } from '@app/layoutes/BaseLayout';
import { Page404 } from '@pages/404';
import { BioPage } from '@pages/bio';
import { DemoComponentsPage } from '@pages/demo-components';
import { EducationPage } from '@pages/education';
import { PATH_BIO, PATH_DEMO_COMPONENTS, PATH_EDUCATION, PATH_ROOT } from '@shared/consts';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: PATH_ROOT,
    element: <BaseLayout />,
    children: [
      { path: PATH_BIO, element: <BioPage /> },
      { path: PATH_EDUCATION, element: <EducationPage /> },
      { path: PATH_DEMO_COMPONENTS, element: <DemoComponentsPage /> },
      { path: '*', element: <Page404 /> },
    ],
  },
]);
