import type { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

import type { rootReducer } from './rootReducer';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, undefined, UnknownAction>;
