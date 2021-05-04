import { Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/services/vacancy.service';
import { NgForm } from '@angular/forms';
import { Vacancy } from 'src/app/models/vacancy';

interface Opportunity {
  id?: number;
  name: string;
  vacancies: number;
  companyLogo: string;
  required: any;
  role: string;
  salary: number
}
//***** criar um model opportunity --- colocar export interface */

/**
 * 
 * array de oportunidades
 * 
 */
const OPPORTUNITIES: Opportunity[] = [
  {
    name: 'Microsoft',
    vacancies: 1,
    companyLogo: 'f/f3/Flag_of_Russia.svg',
    required: 'Java/Angular',
    role: 'Software Enginner Junior',
    salary: 39519
  },
  {
    name: 'IBM',
    vacancies: 1,
    companyLogo: 'c/c3/Flag_of_France.svg',
    required: 'UX/UI/Photoshop',
    role: 'UI Designer',
    salary: 47071
  },
  {
    name: 'IBM',
    vacancies: 10,
    companyLogo: 'b/ba/Flag_of_Germany.svg',
    required: 'Java/Angular',
    role: 'Java Developer',
    salary: 292596
  },
  {
    name: 'Facebook',
    vacancies: 3,
    companyLogo: '5/5c/Flag_of_Portugal.svg',
    required: 'Python/Django',
    role: 'Software Enginner Mid-Level',
    salary: 42617
  },
  {
    name: 'Microsoft',
    vacancies: 4,
    companyLogo: 'c/cf/Flag_of_Canada.svg',
    required: 'Python/Django',
    role: 'Python Developer',
    salary: 47071
  },
  {
    name: 'Facebook',
    vacancies: 4,
    companyLogo: '2/21/Flag_of_Vietnam.svg',
    required: 'Git/Python/Django',
    role: 'Software Enginner',
    salary: 297768
  },
  {
    name: 'Facebook',
    vacancies: 8,
    companyLogo: '0/05/Flag_of_Brazil.svg',
    required: ['.Net'],
    role: 'Software Enginner Senior',
    salary: 177719
  },
  {
    name: 'Microsoft',
    vacancies: 2,
    companyLogo: 'f/fc/Flag_of_Mexico.svg',
    required: ['C#'],
    role: 'Sales Specialist',
    salary: 127139
  },
  {
    name: 'Microsoft',
    vacancies: 3,
    companyLogo: 'a/a4/Flag_of_the_United_States.svg',
    required: ['C#'],
    role: 'Accountant',
    salary: 61632
  },
  {
    name: 'IBM',
    vacancies: 1,
    companyLogo: '4/41/Flag_of_India.svg',
    required: ['Business'],
    role: 'Sales Specialist',
    salary: 86129
  },
  {
    name: 'IBM',
    vacancies: 4,
    companyLogo: '9/9f/Flag_of_Indonesia.svg',
    required: ['.Net'],
    role: 'Marketing Manager',
    salary: 131958
  },
  {
    name: 'Google',
    vacancies: 10,
    companyLogo: '3/38/Flag_of_Tuvalu.svg',
    required: ['Business'],
    role: 'Journalist',
    salary: 55212
  },
  {
    name: 'Google',
    vacancies: 1,
    companyLogo: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    required: ['Business'],
    role: 'Software Analyst',
    salary: 79017
  }
];

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
        this.vacancyService.url = this.urlQuantity;
      }
      else {
        this.checkVagas = false;
        this.checkSalario = true;
        this.vacancyService.url = this.urlSalary;
      }
    }
    else {
      if (this.checkSalario == true) {
        this.checkSalario = true;
        this.checkVagas = false;
        this.vacancyService.url = this.urlSalary;
      }
      else {
        this.checkSalario = false;
        this.checkVagas = true;
        this.vacancyService.url = this.urlQuantity;
      }
    }
    this.getVacancies();
  }

  search() {

  }

  private SetDefault(): void {
    this.checkVagas = true;
    this.checkSalario = false;
  }

}
