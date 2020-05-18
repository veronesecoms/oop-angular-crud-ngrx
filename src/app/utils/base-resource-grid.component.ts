import { Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BaseResourceModel } from '../models/base-resource.model';
import { BaseRecursoService } from '../services/base-recurso-service';

export abstract class BaseResourceGridComponent<T extends BaseResourceModel> {
  public view;
  public formGroup: FormGroup;
  public resources: T[] = [];
  public editing: boolean = false;
  protected formBuilder: FormBuilder;
  public clearFormSubscription = new Subscription();

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseRecursoService<T>,
    protected createFormGroupFn: (dataItem?: any) => FormGroup,
    protected actions: { [key: string]: any },
    protected store: Store
  ) {
    this.formGroup = createFormGroupFn();
  }

  public ngOnInit() {
    this.store.dispatch(this.actions.loadA());
    this.clearFormSubscription = this.resourceService.clearForm$.subscribe(
      () => {
        this.formGroup.reset();
      }
    );
  }

  public save() {
    this.resource = this.formGroup.value;
    if (this.resource.id === null) {
      this.store.dispatch(this.actions.createA({ data: this.resource }));
    } else {
      this.store.dispatch(this.actions.updateA({ data: this.resource }));
    }
  }

  public delete(id: number) {
    this.store.dispatch(this.actions.deleteA({ id: id }));
  }

  public editHandler(dataItem) {
    this.editing = true;
    this.formGroup = this.createFormGroupFn(dataItem);
  }

  public cancel() {
    this.editing = false;
    this.formGroup = this.createFormGroupFn();
  }
}
