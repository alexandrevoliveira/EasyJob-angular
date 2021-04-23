import { Component, OnInit } from '@angular/core';

interface Opportunity {
  id?: number;
  name: string;
  companyLogo: string;
  area: string;
  role: string;
  salary: number
}

const OPPORTUNITIES: Opportunity[] = [
  {
    name: 'Russia',
    companyLogo: 'f/f3/Flag_of_Russia.svg',
    area: 'IT',
    role: 'Software Enginner Junior',
    salary: 39519
  },
  {
    name: 'France',
    companyLogo: 'c/c3/Flag_of_France.svg',
    area: 'Marketing',
    role: 'UI Designer',
    salary: 47071
  },
  {
    name: 'Germany',
    companyLogo: 'b/ba/Flag_of_Germany.svg',
    area: 'Business',
    role: 'CMO',
    salary: 292596
  },
  {
    name: 'Portugal',
    companyLogo: '5/5c/Flag_of_Portugal.svg',
    area: 'IT',
    role: 'Software Enginner Mid-Level',
    salary: 42617
  },
  {
    name: 'Canada',
    companyLogo: 'c/cf/Flag_of_Canada.svg',
    area: 'Marketing',
    role: 'UX Designer',
    salary: 47071
  },
  {
    name: 'Vietnam',
    companyLogo: '2/21/Flag_of_Vietnam.svg',
    area: 'Business',
    role: 'CEO',
    salary: 297768
  },
  {
    name: 'Brazil',
    companyLogo: '0/05/Flag_of_Brazil.svg',
    area: 'IT',
    role: 'Software Enginner Senior',
    salary: 177719
  },
  {
    name: 'Mexico',
    companyLogo: 'f/fc/Flag_of_Mexico.svg',
    area: 'Marketing',
    role: 'Sales Specialist',
    salary: 127139
  },
  {
    name: 'United States',
    companyLogo: 'a/a4/Flag_of_the_United_States.svg',
    area: 'Business',
    role: 'Accountant',
    salary: 61632
  },
  {
    name: 'India',
    companyLogo: '4/41/Flag_of_India.svg',
    area: 'IT',
    role: 'Software Architect',
    salary: 86129
  },
  {
    name: 'Indonesia',
    companyLogo: '9/9f/Flag_of_Indonesia.svg',
    area: 'Marketing',
    role: 'Marketing Manager',
    salary: 131958
  },
  {
    name: 'Tuvalu',
    companyLogo: '3/38/Flag_of_Tuvalu.svg',
    area: 'Business',
    role: 'Journalist',
    salary: 55212
  },
  {
    name: 'China',
    companyLogo: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 'IT',
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

  page = 1;
  pageSize = 4;
  collectionSize = OPPORTUNITIES.length;
  opportunities: Opportunity[];

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
