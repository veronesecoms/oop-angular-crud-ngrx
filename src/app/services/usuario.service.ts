import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { BASE_URL } from './api.baseUrl';
import { BaseRecursoService } from './base-recurso-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseRecursoService<Usuario> {
  constructor(protected injector: Injector) {
    super(`${BASE_URL}/usuarios`, injector, Usuario.fromJson);
  }
}
