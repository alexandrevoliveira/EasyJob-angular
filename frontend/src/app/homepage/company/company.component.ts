import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {

  service: FilterService;
  opportunities: Candidate[];
  page: number;
  pageSize: number;
  collectionSize: number;
  public filter: string;

  constructor(public filterService: FilterService) {
    // this.refreshOpportunities();
    this.service
  }

  ngOnInit(): void {
    this.loadGrid();
  }

  loadGrid(filter?) {

    this.filterService.getCandidates(filter).subscribe((res: Candidate[]) => {
      this.opportunities = res;
      this.page = 1;
      this.pageSize = 4;
      this.collectionSize = this.opportunities.length;
      console.log(this.opportunities)
    });
  }

  loadGridFilter() {
    this.loadGrid(this.filter);
  }

  refreshOpportunities() {
    this.opportunities = this.opportunities
      .map((opportunity, i) => ({ id: i + 1, ...opportunity }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
