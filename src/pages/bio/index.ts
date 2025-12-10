export * from './ui/BioPage/BioPage';
import { lazy } from 'react';

export const BioPage = lazy(() =>
  import('./ui/BioPage/BioPage').then((module) => ({ default: module.BioPage })),
);
