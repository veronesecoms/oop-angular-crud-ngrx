import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'funcionario-grid',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioGrid {
  user: Observable<Usuario>;
  constructor(private store: Store<{ count: number; userStates: Usuario }>) {
    this.user = store.pipe(select('userStates'));
  }
}
