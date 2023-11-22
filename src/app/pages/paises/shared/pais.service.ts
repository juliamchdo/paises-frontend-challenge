import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Pais } from "../shared/pais.model";
import { LoginService } from "src/app/security/login/login.service";

@Injectable({
    providedIn: 'root'
})

export class PaisService{
    constructor(private http:HttpClient, private loginService:LoginService){

    }

    public listAll():Observable<Pais[]>{

        const token = this.loginService.getToken();
    
        const url = `${environment.host}/pais/listar?token=${token}`

        return this.http.get(url).pipe(
            map(this.mapToPaises)
        )
    }

    private mapToPaises(data:any):Array<Pais>{
        const listPaises : Pais[] = [];

        data.forEach((e:any) => listPaises.push(Object.assign(new Pais, e)));

        return listPaises;
    }

    public saveNew(newPais:Pais):Observable<Pais>{
        const token = this.loginService.getToken();
        const url = `${environment.host}/pais/salvar?token=${token}`;

        return this.http.post(url, newPais).pipe(
            map(this.mapToPais)
        )
    }

    private mapToPais(data:any):Pais{
        return (Object.assign(new Pais, data));
    }
}