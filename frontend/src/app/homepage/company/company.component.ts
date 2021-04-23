import { Component, OnInit } from '@angular/core';


interface Candidate {
  id?: number;
  name: string;
  area: string;
  role: string;
  salaryExpectation: number
}

const OPPORTUNITIES: Candidate[] = [
  {
    name: 'Jan Andrade Gorjão',
    area: 'IT',
    role: 'Software Enginner Junior',
    salaryExpectation: 39519
  },
  {
    name: 'Saúl Laureano Brião',
    area: 'Marketing',
    role: 'UI Designer',
    salaryExpectation: 47071
  },
  {
    name: 'Lázaro Gago Esparteiro',
    area: 'Business',
    role: 'CMO',
    salaryExpectation: 292596
  },
  {
    name: 'Eduarda Bandeira Matosinhos',
    area: 'IT',
    role: 'Software Enginner Mid-Level',
    salaryExpectation: 42617
  },
  {
    name: 'Liliana Lagos Sobral',
    area: 'Marketing',
    role: 'UX Designer',
    salaryExpectation: 47071
  },
  {
    name: 'Jonatã Ornelas Calado',
    area: 'Business',
    role: 'CEO',
    salaryExpectation: 297768
  },
  {
    name: 'Eric Castilho Damásio',
    area: 'IT',
    role: 'Software Enginner Senior',
    salaryExpectation: 177719
  },
  {
    name: 'Aires Chainho Godinho',
    area: 'Marketing',
    role: 'Sales Specialist',
    salaryExpectation: 127139
  },
  {
    name: 'Flávia Cambezes Pestana',
    area: 'Business',
    role: 'Accountant',
    salaryExpectation: 61632
  },
  {
    name: 'Ariane Cascais Fortes',
    area: 'IT',
    role: 'Software Architect',
    salaryExpectation: 86129
  },
  {
    name: 'Fabian Aleixo Caçoilo',
    area: 'Marketing',
    role: 'Marketing Manager',
    salaryExpectation: 131958
  },
  {
    name: 'Ludmila Cambezes Galindo',
    area: 'Business',
    role: 'Journalist',
    salaryExpectation: 55212
  },
  {
    name: 'Diana Lários Camacho',
    area: 'IT',
    role: 'Software Analyst',
    salaryExpectation: 79017
  }
];

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = OPPORTUNITIES.length;
  opportunities: Candidate[];

  constructor() {
    this.refreshOpportunities();
  }

  ngOnInit(): void {
  }

  refreshOpportunities() {
    this.opportunities = OPPORTUNITIES
      .map((opportunity, i) => ({id: i + 1, ...opportunity}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
