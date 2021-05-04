import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment"
import { map } from 'rxjs/operators';

import { Vacancy } from '../models/vacancy.model';

@Injectable({ providedIn: 'root' })
export class VacancyService {

    constructor(private http: HttpClient) {}

    getVacancies() {
        let get = this.http.get('http://localhost:3000/vacancy')
        console.log(get)
        return get
    }
}