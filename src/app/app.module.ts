import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AddEmployeeComponent } from '../app/add-employee/add-employee.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { EmpDataComponent } from './components/emp-data/emp-data.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    LoginComponent,
    EmpDataComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    NgFor,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
