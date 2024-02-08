import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  public appid = '2e7a71e4dbbbbac7ee73d917339e589f'
  weatherForm!: FormGroup;
  public units = "metric"

  constructor(
    public auth : AuthService,
    private fb: FormBuilder,
  ){}

  ngOnInit(){
    this.weatherForm = this.fb.group({
      city: ['',]
    })
    console.log(this.weatherForm.value);
    
  }
  checkWeather(){
    console.log("1",this.weatherForm.value.city);
    console.log("2",this.appid);
    console.log("3",this.units);
    
    this.auth.checkWeatherapi().subscribe((response:any) =>{
      console.log("resppp", response);
      
    })
  }

}
