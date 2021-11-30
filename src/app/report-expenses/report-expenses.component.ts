import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-report-expenses',
  templateUrl: './report-expenses.component.html',
  styleUrls: ['./report-expenses.component.css']
})
export class ReportExpensesComponent implements OnInit {

  expenses: any;

  getExpense() {
    this.expense.getdetails().subscribe((data: any) => {
      this.expenses = data;
      console.log(this.expenses);
    });
  }

  constructor(private http: HttpClient, private expense: ExpensesService) { }

  ngOnInit(): void {

    this.getExpense()

  }

}
