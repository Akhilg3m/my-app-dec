import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { MarksComponent } from './marks/marks.component';
import { ProductsComponent } from './products/products.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component: DashboardComponent,children:[
    {path:'home', component:HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'calculator', component: CalculatorComponent},
    {path:'directives', component: DirectivesComponent},
    {path:'marks', component: MarksComponent},
    {path:'products', component: ProductsComponent},
    {path:'vehicle', component: VehicleComponent},
    {path:'create-vehicle', component: CreateVehicleComponent},
    {path:'create-user', component: CreateUserComponent},
    {path:'parent', component: ParentComponent},
    {path:'edit-vehicle/:id',component: CreateVehicleComponent}
  ]},
  {path:'', component: LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
