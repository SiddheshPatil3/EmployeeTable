import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }

  addEmploee(data: any){
    return this.http.post('http://localhost:3000/employee', data);
  }

  editEmploee(id: any, data: any){
    return this.http.put('http://localhost:3000/employee/'+id, data);
  }

  getEmployeeData(){
    return this.http.get("http://localhost:3000/employee");
  }

  deleteEmployee(id: number){
    return this.http.delete('http://localhost:3000/employee/'+id);
  }

  checkWeatherapi(){
    // var data={q: q, appid: appid, units: units}
    return this.http.get('https://api.openweathermap.org/data/2.5/weather');
  }

}

