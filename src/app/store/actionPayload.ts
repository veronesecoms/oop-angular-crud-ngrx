import { Actions } from '@ngrx/effects';

export interface IActionWithPayload extends Actions {
  type: string;
  payload?: any;
}
