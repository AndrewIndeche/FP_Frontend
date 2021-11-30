import { Component, OnInit } from '@angular/core';
import { RunpayService } from '../services/runpay.service';
import { ApproveExpenseService} from '../services/approve-expenses.service';

@Component({
  selector: 'app-expense-overview',
  templateUrl: './expense-overview.component.html',
  styleUrls: ['./expense-overview.component.css']
})
export class ExpenseOverviewComponent implements OnInit {
  expenseOne:any
  expenseTwo:any
  expenseThree:any
  expenseFour:any
  expenseFive:any
  allExpense:any
    constructor(private expense:ApproveExpenseService) { }
    getExpenseOver() {
      this.expense.getExpenseOver().subscribe((data: any) => {
        this.expenseOne = data;
        console.log(this.expenseOne);
      });
    }
    getExpenseOverTwo() {
      this.expense.getExpenseOverTwo().subscribe((data: any) => {
        this.expenseTwo = data;
        console.log(this.expenseTwo);
      });
    }
    getExpenseOverThree() {
      this.expense.getExpenseOverThree().subscribe((data: any) => {
        this.expenseThree = data;
        console.log(this.expenseThree);
      });
    }
    getExpenseOverFour() {
      this.expense.getExpenseOverFour().subscribe((data: any) => {
        this.expenseFour = data;
        console.log(this.expenseFour);
      });
    }
    getExpenseOverFive() {
      this.expense.getExpenseOverFive().subscribe((data: any) => {
        this.expenseFive = data;
        console.log(this.expenseFive);
      });
    }
    getExpenseAll() {
      this.expense.getAllExpenses().subscribe((data: any) => {
        this.allExpense = data;
        console.log(this.allExpense);
      });
    }
    ngOnInit(): void {
      this.getExpenseOver()
      this.getExpenseOverTwo()
      this.getExpenseOverThree()
      this.getExpenseOverFour()
      this.getExpenseOverFive()
      this.getExpenseAll()
    }
}
