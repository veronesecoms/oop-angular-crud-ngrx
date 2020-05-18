import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BaseResourceModel } from '../models/base-resource.model';
import { Usuario } from '../models/usuario.model';

export abstract class BaseRecursoService<
  T extends BaseResourceModel
> extends BehaviorSubject<T> {
  protected http: HttpClient;
  private clearFormSource = new Subject<boolean>();
  clearForm$ = this.clearFormSource.asObservable();
  constructor(
    protected apiPath: string,
    protected injector: Injector,
    protected jsonDataToResourceFn: (jsonData: any) => T
  ) {
    super(null);
    this.http = injector.get(HttpClient);
  }

  public setClearForm() {
    this.clearFormSource.next(true);
  }

  public read(): Observable<Usuario> {
    return this.getAll();
  }

  public save(data: T): Observable<any> {
    return this.http.post<T>(`${this.apiPath}`, data);
  }

  public update(data: T) {
    return this.http.put<T>(`${this.apiPath}/${data.id}`, data);
  }

  public delete(id: number) {
    return this.http.delete<number>(`${this.apiPath}/${id}`);
  }

  public getAll(): Observable<Usuario> {
    return this.http.get<any>(`${this.apiPath}`);
  }
}
