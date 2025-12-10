import { lazy } from 'react';

export const DemoComponentsPage = lazy(() =>
  import('./ui/DemoComponents').then((module) => ({ default: module.DemoComponents })),
);
