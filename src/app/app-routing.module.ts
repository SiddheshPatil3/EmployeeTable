import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmpDataComponent } from './components/emp-data/emp-data.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: LoginComponent
  // },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'emp-data',
    component : EmpDataComponent,
  },
  {
    path: 'weather',
    component : WeatherComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
