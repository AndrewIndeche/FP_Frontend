import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expenses } from './expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  expenses_url = "https://machachari.herokuapp.com/finance/api/expensesw/"

  expenses!: Expenses;

  getdetails() {
    return this.http.get(this.expenses_url);
  }
  constructor(private http: HttpClient) { }
}
