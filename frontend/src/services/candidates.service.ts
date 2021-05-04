import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Candidate } from 'src/models/candidates.model';

@Injectable()
export class CandidateService {
    private candidates: Candidate[] = [];

    constructor(private http: HttpClient) { }

    getCandidates() {
        this.http
            .get<{ candidates: Candidate }>('http://localhost:3001/cadidate')
        }

}