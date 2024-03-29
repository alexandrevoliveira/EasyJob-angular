import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment"

@Injectable({ providedIn: 'root' })
export class FilterService {

    constructor(public http: HttpClient) {
        this.http = http;
    }

    getCandidates(filter?) {
        return this.http.get(`${environment.urlService}/candidate?filter=${filter}`);
    }
}