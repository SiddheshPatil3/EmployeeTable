import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../../add-employee/add-employee.component';
import { AuthService } from '../../services/auth.service'
import {MatPaginator } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.scss']
})
export class EmpDataComponent {

  displayedColumns: string[] = [
    'id', 
    'firstname', 
    'lastname', 
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experiance',
    'package',
    'actions'
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  title = 'CRUD-APP';
  empData : any;

  constructor(
    private dialog: MatDialog,
    private auth: AuthService,
    private toastr: ToastrService
  ){}

  ngOnInit() {
    this.getEmplyoeeData();
  }

  openDialog(){
    const openDialog  = this.dialog.open(AddEmployeeComponent);
    openDialog.afterClosed().subscribe((res:any) =>{
      if (res) {
        this.getEmplyoeeData();
      }
    })
  }

  getEmplyoeeData(){
    this.auth.getEmployeeData().subscribe((response: any) =>{
      console.log(response);
      this.empData = response;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, (err: any) =>{
      console.error("Somthing went Wrong");
      this.toastr.error("Somthing went Wrong");
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmp(id: number){
    this.auth.deleteEmployee(id).subscribe((response:any) =>{
      console.log(response);
      this.toastr.info("Employee Deleted Successfully");
      this.getEmplyoeeData();
    }, (err)=>{
      console.error("Something went Wrong");
      
    })
  }

  openEditDialog(data: any){
    const openDialog  = this.dialog.open(AddEmployeeComponent, {
      data,
    });
    openDialog.afterClosed().subscribe((res:any) =>{
      if (res) {
        this.getEmplyoeeData();
      }
    })
  }
}
