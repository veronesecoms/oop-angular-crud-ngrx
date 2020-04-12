import { Injector} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseRecursoService } from '../services/base-recurso-service'
import { BaseResourceModel } from '../models/base-resource.model';

export abstract class BaseResourceGridComponent<T extends BaseResourceModel> {

    public view;
    public formGroup: FormGroup;
    public resources: T[] = [];
    public editing: boolean = false
    protected formBuilder: FormBuilder;

    constructor(
        protected injector: Injector,
        public resource: T,
        protected resourceService: BaseRecursoService<T>,
        protected createFormGroupFn: (dataItem?: any) => FormGroup
    ) {
        this.formGroup = createFormGroupFn();
    }

    public ngOnInit() {
        this.resourceService.read()
        this.view = this.resourceService
        this.resourceService.clearForm.subscribe(() => {
            this.formGroup.reset()
            this.editing = false
        })
    }

    public save() {
        this.resource = this.formGroup.value
        if (this.resource.id === null) {
            this.resourceService.save(this.resource)
        } else {
            this.resourceService.update(this.resource)
        }
    }

    public delete (id) {
        this.resourceService.delete(id)
    }

    public editHandler (dataItem) {
        this.editing = true
        this.formGroup = this.createFormGroupFn(dataItem)
    }

    public cancel () {
        this.editing = false
        this.formGroup = this.createFormGroupFn()
    }
}