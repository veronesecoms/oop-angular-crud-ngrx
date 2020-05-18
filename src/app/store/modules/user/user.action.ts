import { createAction, props } from '@ngrx/store';
import { Usuario } from './../../../models/usuario.model';

export const loadA = createAction('[Users List] Load User List via Service');

export const loadedA = createAction(
  '[Users Effect] User List Loaded Successfully',
  props<{ users: Usuario[] }>()
);

export const createA = createAction(
  '[Create User Component] Create User',
  props<{ data: Usuario }>()
);

export const deleteA = createAction(
  '[User List Operations] Delete User',
  props<{ id: number }>()
);

export const updateA = createAction(
  '[User List Operations] Update User',
  props<{ data: Usuario }>()
);

export const userActions = {
  loadA,
  loadedA,
  createA,
  deleteA,
  updateA
};
