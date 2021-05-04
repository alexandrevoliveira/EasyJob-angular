import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Vacancy } from '../../models/vacancy.model'

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  VACANCIES: Vacancy[] = [];

  displayedColumns: string[] = ['area', 'role', 'type', 'requirements', 'salary', 'apply'];
  dataSource = new MatTableDataSource<Vacancy>(this.VACANCIES);

  constructor(private service:VacancyService) { }

  ngOnInit(): void {
    this.getVacancies(); 
  }

  public getVacancies(){
    let resp = this.service.getVacancies();
    resp.subscribe(vacancy=>this.dataSource.data=vacancy as Vacancy[])
    
  }
}
