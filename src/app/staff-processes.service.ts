import { Injectable } from '@angular/core';
import { Processes } from './staff-processes/processes';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StaffProcessService {
  staff_url = "https://machachari.herokuapp.com/finance/api/staffw/"
  process!:Processes;
  
  getdetails(){
    return this.http.get(this.staff_url);
  }
  constructor(private http: HttpClient) { }
}
