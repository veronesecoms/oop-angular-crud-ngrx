import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BaseResourceGridComponent } from 'src/app/utils/base-resource-grid.component';
import { userActions } from './../../store/modules/user/user.action';
import {
  getAllUsers,
  getUserEditing
} from './../../store/modules/user/user.selectors';

const createFormGroup = (dataItem?: Usuario) => {
  if (dataItem) {
    return new FormGroup({
      id: new FormControl(dataItem.id),
      nome: new FormControl(dataItem.nome),
      cidade: new FormControl(dataItem.cidade)
    });
  }
  return new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cidade: new FormControl('')
  });
};

@Component({
  selector: 'usuario-grid',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioGrid extends BaseResourceGridComponent<Usuario>
  implements OnInit {
  count$: Observable<number>;
  users$: Observable<Usuario[]> = this.store.pipe(select(getAllUsers));
  public clearFormSubscription = new Subscription();
  constructor(
    protected injector: Injector,
    protected usuarioService: UsuarioService,
    protected store: Store
  ) {
    super(
      injector,
      new Usuario(),
      usuarioService,
      createFormGroup,
      userActions,
      store
    );
  }
}
