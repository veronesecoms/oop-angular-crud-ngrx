import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment a value');
export const decrement = createAction('[Counter Component] Decrement a value');
export const resetValue = createAction('[Counter Component] Reset');
