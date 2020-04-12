import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injector } from '@angular/core';
import { BaseResourceModel } from '../models/base-resource.model';

export abstract class BaseRecursoService<T extends BaseResourceModel> extends BehaviorSubject<T> {

    protected http: HttpClient;
    private clearFormSource = new BehaviorSubject<boolean>(false);
    public clearForm = this.clearFormSource.asObservable();

    constructor(
        protected apiPath: string,
        protected injector: Injector,
        protected jsonDataToResourceFn: (jsonData:any) => T
    ) {
        super(null)
        this.http = injector.get(HttpClient)
    }

    public setClearForm() {
        this.clearFormSource.next(true)
    }

    public read() {
        this.getAll().subscribe(res => {
            super.next(res)
        })
    }

    public save(data: T) {
        return this.http.post<any>(`${this.apiPath}`, data).subscribe(() => {
            this.setClearForm()
            this.read()
        })
    }

    public update(data: T) {
        this.http.put<any>(`${this.apiPath}/${data.id}`, data).subscribe(() => {
            this.setClearForm()
            this.read()
        })
    }

    public delete(id) {
        this.http.delete<any>(`${this.apiPath}/${id}`).subscribe(() => {
            this.read()
        })
    }

    public getAll():Observable<any> {
        return this.http.get<any>(`${this.apiPath}`)
    }

}