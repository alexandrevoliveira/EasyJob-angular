import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Candidate } from 'src/app/models/candidate.model';
import { FilterService } from 'src/app/services/filter.service';

interface SearchProps {
  name: string | boolean;
  vacancy: string | boolean;
}

interface ResProps {
  candidates: Candidate[],
  search: {
    term: SearchProps[],
    total: number;
  }
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {

  service: FilterService;
  opportunities: Candidate[];
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  filter = new FormControl('');

  constructor(public filterService: FilterService) {
  }

  ngOnInit(): void {
    this.loadGrid();
  }

  loadGrid(): void {
    this.filterService.getCandidates(this.filter.value).subscribe((res: ResProps) => {
      this.opportunities = res.candidates;
      this.refreshOpportunities();
    });
  }

  refreshOpportunities() {
    this.collectionSize = this.opportunities.length;
    this.opportunities = this.opportunities
      .map((opportunity, i) => ({ id: i + 1, ...opportunity }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}