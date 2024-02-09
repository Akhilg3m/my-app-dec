import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCompanyComponent } from './contact-company/contact-company.component';
import { ContactCeoComponent } from './contact-ceo/contact-ceo.component';

const routes: Routes = [
  {path:'contact-company', component:ContactCompanyComponent},
  {path:'contact-ceo', component:ContactCeoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
