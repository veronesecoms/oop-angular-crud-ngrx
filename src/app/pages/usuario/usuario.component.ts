import { Component, OnInit, Injector } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseResourceGridComponent } from 'src/app/utils/base-resource-grid.component';

const createFormGroup = (dataItem?: Usuario) => {
    if (dataItem) {
        return new FormGroup({
            id: new FormControl(dataItem.id),
            nome: new FormControl(dataItem.nome),
            cidade: new FormControl(dataItem.cidade)
        })
    }
    return new FormGroup({
        id: new FormControl(),
        nome: new FormControl(''),
        cidade: new FormControl('')
    })
}

@Component({
    selector: 'usuario-grid',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.scss']
})

export class UsuarioGrid extends BaseResourceGridComponent<Usuario> implements OnInit {

    constructor(protected injector: Injector, protected usuarioService: UsuarioService) {
        super(injector, new Usuario(), usuarioService, createFormGroup)
    }

    public ngOnInit(): void {
        super.ngOnInit()
    }

}