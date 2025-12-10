import { lazy } from 'react';

export const EducationPage = lazy(() =>
  import('./ui/EducationPage').then((module) => ({ default: module.EducationPage })),
);
