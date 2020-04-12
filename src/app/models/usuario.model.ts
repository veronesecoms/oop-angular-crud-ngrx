export class Usuario {
    constructor(
        public id?: number,
        public nome?: string,
        public cidade?: string
    ) {}
    static fromJson(jsonData: any): Usuario {
        return Object.assign(new Usuario(jsonData.id), jsonData);
    }
}