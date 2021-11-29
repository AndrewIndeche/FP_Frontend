import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApproveExpenseService {

  url2='https://financefuzu.herokuapp.com/finance/api/'
  url3 ='https://financegrp.herokuapp.com/payroll/'
  url4 = 'https://machachari.herokuapp.com/finance/api/'


  constructor(private http: HttpClient) { }

  getExpense1() {
    return this.http.get(this.url2 + 'approve/8/');
  }
  getExpense2() {
    return this.http.get(this.url2 + 'approve/9/');
  }
  getGrossPay() {
    return this.http.get(this.url2 + 'staff/5/');
  }
  getPayrollA() {
    return this.http.get(this.url3 + '7/');
  }
  getPayrollB() {
    return this.http.get(this.url3 + '7/');
  }
  getExpenseOver() {
    return this.http.get(this.url2 + 'approve/6/');
  }
  getExpenseOverTwo() {
    return this.http.get(this.url2 + 'approve/7/');
  }
  getExpenseOverThree() {
    return this.http.get(this.url2 + 'approve/8/');
  }
  getExpenseOverFour() {
    return this.http.get(this.url2 + 'approve/9/');
  }
  getExpenseOverFive() {
    return this.http.get(this.url2 + 'approve/10/');
  }
  getPayrollOne() {
    return this.http.get(this.url3 + '7/');
  }
  getPayrollTwo() {
    return this.http.get(this.url3 + '8/');
  }
  getPayrollThree() {
    return this.http.get(this.url3 + '9/');
  }
  getAllExpenses() {
    return this.http.get(this.url4 + 'expensesw/');
  }
  getAllApprovals() {
    return this.http.get(this.url4 + 'expensesw/');
  }
}

