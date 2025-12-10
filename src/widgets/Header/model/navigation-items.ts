import { PATH_BIO, PATH_DEMO_COMPONENTS, PATH_EDUCATION } from '@shared/consts';

export interface NavItemData {
  path: string;
  label: string;
}

export const navigationItems: NavItemData[] = [
  {
    path: PATH_BIO,
    label: 'Bio',
  },
  {
    path: PATH_EDUCATION,
    label: 'Education',
  },
  {
    path: PATH_DEMO_COMPONENTS,
    label: 'Demo',
  },
];
