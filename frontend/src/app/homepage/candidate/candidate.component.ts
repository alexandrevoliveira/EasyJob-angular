import { Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/services/vacancy.service';
import { NgForm } from '@angular/forms';
import { Vacancy } from 'src/app/models/vacancy';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  checkVagas: boolean;
  checkSalario: boolean;
  inputRequisitos: string;

  vacancy = {} as Vacancy;
  vacancies: Vacancy[];

  urlQuantity: string = 'http://localhost:3001/vacancy?order=quantity';
  urlSalary: string = 'http://localhost:3001/vacancy?order=salary';
  urlAtual: string;

  constructor(private vacancyService: VacancyService) {

  }

  ngOnInit(): void {
    this.SetDefault();
    this.getVacancies();
  }

  getVacancies() {
    this.vacancyService.getVacancies().subscribe((vacancies: Vacancy[]) => {
      this.vacancies = vacancies;
      console.log(vacancies);
    });
  }

  filter(check: string) {
    console.log(check);
    if (check == 'checkVagas') {
      if (this.checkVagas == true) {
        this.checkVagas = true;
        this.checkSalario = false;
        this.urlAtual = this.urlQuantity;
        this.vacancyService.url = this.urlQuantity;
      }
      else {
        this.checkVagas = false;
        this.checkSalario = true;
        this.urlAtual = this.urlSalary;
        this.vacancyService.url = this.urlSalary;
      }
    }
    else {
      if (this.checkSalario == true) {
        this.checkSalario = true;
        this.checkVagas = false;
        this.urlAtual = this.urlSalary;
        this.vacancyService.url = this.urlSalary;
      }
      else {
        this.checkSalario = false;
        this.checkVagas = true;
        this.urlAtual = this.urlQuantity;
        this.vacancyService.url = this.urlQuantity;
      }
    }
    this.getVacancies();
  }

  search() {
    this.vacancyService.url = this.urlAtual + '&filter=' + this.inputRequisitos;
    console.log(this.vacancyService.url);
    this.getVacancies();
  }

  private SetDefault(): void {
    this.checkVagas = true;
    this.checkSalario = false;
  }

}
