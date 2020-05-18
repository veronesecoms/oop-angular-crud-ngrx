import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from './../../../models/usuario.model';
import { loadedA } from './user.action';

export interface UserState {
  users: Usuario[];
  editingUser: Usuario;
}

export const initialState: UserState = {
  users: [],
  editingUser: {
    id: null,
    cidade: '',
    nome: ''
  }
};

export const userFeatureKey = 'users';

const _userReducer = createReducer(
  initialState,
  on(loadedA, (state, { users }) => ({ ...state, users: users }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
