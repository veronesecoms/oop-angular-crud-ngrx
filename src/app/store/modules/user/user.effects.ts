import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { UsuarioService } from './../../../services/usuario.service';
import { userActions } from './user.action';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadA),
      mergeMap(() =>
        this.usuarioService.getAll().pipe(
          map((users: any) => userActions.loadedA({ users: users })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  public saveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.createA),
      switchMap((action) =>
        this.usuarioService.save(action.data).pipe(
          map(() => {
            this.usuarioService.setClearForm();
            return userActions.loadA();
          })
        )
      )
    )
  );

  public updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.updateA),
      switchMap((action) =>
        this.usuarioService.update(action.data).pipe(
          map(
            () => {
              this.usuarioService.setClearForm();
              return userActions.loadA();
            },
            catchError((error) => of(userActions.loadA()))
          )
        )
      )
    )
  );

  public deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.deleteA),
      switchMap((action) =>
        this.usuarioService.delete(action.id).pipe(
          map(() => userActions.loadA()),
          catchError((error) => of(userActions.loadA()))
        )
      )
    )
  );
}
