import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";

@Injectable()
export class CategoriaService {

    constructor(public http: HttpClient) {

    }

    findAll() : Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }

    // findAll() : any {
    //     let categorias = [
    //         {
    //             "id": 1,
    //             "nome": "Moradia",
    //         }, 
    //         {
    //             "id": 4,
    //             "nome": "Futbol",
    //         }, 
    //         {
    //             "id": 3,
    //             "nome": "Roupas",
    //         }, 
    //         {
    //             "id": 2,
    //             "nome": "Carros",
    //         }
    //     ];
    // }

}