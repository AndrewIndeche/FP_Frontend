import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payroll } from './payroll-class/payroll';
@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  payroll_url = "https://financegrp.herokuapp.com/payroll/"
  payrolls!: Payroll;
  getdetails() {
    return this.http.get(this.payroll_url);
  }
  constructor(private http: HttpClient) { }
}
