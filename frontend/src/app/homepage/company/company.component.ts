import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CandidateService } from '../../services/candidate.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Candidate } from '../../models/candidate.model';

const CANDIDATES: Candidate[] = [
  {
    name: 'Jan Andrade Gorjão',
    area: 'IT',
    role: 'Software Enginner Junior',
    salary: 39519
  },
  {
    name: 'Saúl Laureano Brião',
    area: 'Marketing',
    role: 'UI Designer',
    salary: 47071
  },
  {
    name: 'Lázaro Gago Esparteiro',
    area: 'Business',
    role: 'CMO',
    salary: 292596
  },
  {
    name: 'Eduarda Bandeira Matosinhos',
    area: 'IT',
    role: 'Software Enginner Mid-Level',
    salary: 42617
  },
  {
    name: 'Liliana Lagos Sobral',
    area: 'Marketing',
    role: 'UX Designer',
    salary: 47071
  },
  {
    name: 'Jonatã Ornelas Calado',
    area: 'Business',
    role: 'CEO',
    salary: 297768
  },
  {
    name: 'Eric Castilho Damásio',
    area: 'IT',
    role: 'Software Enginner Senior',
    salary: 177719
  },
  {
    name: 'Aires Chainho Godinho',
    area: 'Marketing',
    role: 'Sales Specialist',
    salary: 127139
  },
  {
    name: 'Flávia Cambezes Pestana',
    area: 'Business',
    role: 'Accountant',
    salary: 61632
  },
  {
    name: 'Ariane Cascais Fortes',
    area: 'IT',
    role: 'Software Architect',
    salary: 86129
  },
  {
    name: 'Fabian Aleixo Caçoilo',
    area: 'Marketing',
    role: 'Marketing Manager',
    salary: 131958
  },
  {
    name: 'Ludmila Cambezes Galindo',
    area: 'Business',
    role: 'Journalist',
    salary: 55212
  },
  {
    name: 'Diana Lários Camacho',
    area: 'IT',
    role: 'Software Analyst',
    salary: 79017
  }
]

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  closeResult: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'area', 'role', 'salary', 'contact'];
  dataSource = new MatTableDataSource<Candidate>(CANDIDATES);

  constructor(private service:CandidateService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getCandidates()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  public getCandidates() {
    let resp = this.service.getCandidates()
    resp.subscribe(candidate=>this.dataSource.data=candidate as Candidate[])
  }

}