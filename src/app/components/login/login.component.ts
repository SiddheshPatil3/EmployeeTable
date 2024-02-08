import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from 'src/app/add-employee/add-employee.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private dialog: MatDialog,
  ){ }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }

  openEditDialog(){
    const openDialog  = this.dialog.open(AddEmployeeComponent);
    
  }
}
