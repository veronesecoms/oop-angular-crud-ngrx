import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const getAllUserState = createFeatureSelector<UserState>('users');
export const getUserEditingState = createFeatureSelector<UserState>('users');

export const getAllUsers = createSelector(
  getAllUserState,
  (state: UserState) => state.users
);

export const getUserEditing = createSelector(
  getUserEditingState,
  (state: UserState) => state.editingUser
);
