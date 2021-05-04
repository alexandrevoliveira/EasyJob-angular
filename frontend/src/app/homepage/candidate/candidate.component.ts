import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { VacancyService } from 'src/app/services/vacancy.service';
import { Vacancy } from '../../models/vacancy.model'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


const OPPORTUNITIES: Vacancy[] = [
  {
    role: 'Software Enginner Junior',
    type: '',
    requirements:'',
    area: 'IT',
    salary: 39519
  },
  {
    
    role: 'UI Designer',
    type: '',
    requirements:'',
    area: 'Marketing',
    salary: 47071
  },
  {
    
    role: 'CMO',
    type: '',
    requirements:'',
    area: 'Business',
    salary: 292596
  },
  {
    
    role: 'Software Enginner Mid-Level',
    type: '',
    requirements:'',
    area: 'IT',
    salary: 42617
  },
  {
    
    role: 'UX Designer',
    type: '',
    requirements:'',
    area: 'Marketing',
    salary: 47071
  },
  {
    
    role: 'CEO',
    type: '',
    requirements:'',
    area: 'Business',
    salary: 297768
  },
  {
    
    role: 'Software Enginner Senior',
    type: '',
    requirements:'',
    area: 'IT',
    salary: 177719
  },
  {
    
    role: 'Sales Specialist',
    type: '',
    requirements:'',
    area: 'Marketing',
    salary: 127139
  },
  {
    
    role: 'Accountant',
    type: '',
    requirements:'',
    area: 'Business',
    salary: 61632
  },
  {
    
    role: 'Software Architect',
    type: '',
    requirements:'',
    area: 'IT',
    salary: 86129
  },
  {
    
    role: 'Marketing Manager',
    type: '',
    requirements:'',
    area: 'Marketing',
    salary: 131958
  },
  {
    
    role: 'Journalist',
    type: '',
    requirements:'',
    area: 'Business',
    salary: 55212
  },
  {
    
    role: 'Software Analyst',
    type: '',
    requirements:'',
    area: 'IT',
    salary: 79017
  }
];


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  closeResult: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['area', 'role', 'type', 'requirements', 'salary', 'apply'];
  dataSource = new MatTableDataSource<Vacancy>(OPPORTUNITIES);

  constructor(private service:VacancyService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getVacancies(); 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  public getVacancies(){
    let resp = this.service.getVacancies();
    resp.subscribe(vacancy=>this.dataSource.data=vacancy as Vacancy[])    
  }
}
