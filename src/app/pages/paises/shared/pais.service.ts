import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Pais } from "../shared/pais.model";

@Injectable({
    providedIn: 'root'
})

export class PaisService{
    constructor(private http:HttpClient){

    }

    public listAll():Observable<Pais[]>{
        const url = `${environment.host}/pais/listar`

        return this.http.get(url).pipe(
            map(this.mapToPaises)
        )
    }

    private mapToPaises(data:any):Array<Pais>{
        const listPaises : Pais[] = [];

        data.forEach((e:any) => listPaises.push(Object.assign(new Pais, e)));

        return listPaises;
    }
}