import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './homepage/candidate/candidate.component';
import { CompanyComponent } from './homepage/company/company.component';

import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
 { path: '', component: HomepageComponent},
 { path: 'candidate', component: CandidateComponent },
 { path: 'company', component: CompanyComponent },
 { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
