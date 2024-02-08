import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit{

  empForm!: FormGroup;

  public education: string[]=[
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post-Graduate'
  ]

  constructor(
    private fb : FormBuilder,
    private auth: AuthService,
    private http: HttpClient,
    private dialogRef : MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService
  ){}

  ngOnInit() {
    this.empForm = this.fb.group({
      firstname :  ['', Validators.required],
      lastname :  ['', Validators.required],
      email :  ['',[ Validators.required, Validators.email]],
      dob :  ['', Validators.required],
      gender :  ['', Validators.required],
      education :  ['', Validators.required],
      company :  ['', Validators.required],
      experiance :  ['', Validators.required],
      package :  ['', Validators.required],
    })
    this.empForm.patchValue(this.data);
  }
  
  

  formSubmit(){
    if (this.empForm.valid) {
      if (this.data) {
        this.auth.editEmploee(this.data.id, this.empForm.value).subscribe((response: any) =>{
          console.log(response);
          this.toastr.success("Employee Detail Updated !!!")
          this.dialogRef.close(true);
        }),(err:any) =>{
          console.error("Something Went Wrong", err);
        };
      } else {
        this.auth.addEmploee(this.empForm.value).subscribe((response: any) =>{
          console.log(response);
          this.toastr.success("Employee Added Successfully !!!")
          this.dialogRef.close(true);
        }),(err:any) =>{
          console.error("Something Went Wrong", err);
        };
      }
    }
  }
}
