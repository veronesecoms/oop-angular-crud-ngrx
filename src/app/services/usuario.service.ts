import { Usuario } from '../models/usuario.model'
import { BASE_URL } from './api.baseUrl'
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { BaseRecursoService } from './base-recurso-service';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService extends BaseRecursoService<Usuario> {

    constructor(protected injector: Injector) {
        super(`${BASE_URL}/usuarios`, injector, Usuario.fromJson);
    }

}