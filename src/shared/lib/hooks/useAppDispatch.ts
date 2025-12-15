import type { AppDispatch } from '@app/providers/sotre';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
