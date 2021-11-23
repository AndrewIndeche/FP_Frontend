import { Component, OnInit } from '@angular/core';
import { RunpayService } from '../services/runpay.service';
@Component({
  selector: 'app-expense-overview',
  templateUrl: './expense-overview.component.html',
  styleUrls: ['./expense-overview.component.css']
})
export class ExpenseOverviewComponent implements OnInit {
  expenses:any

  constructor(private htt:RunpayService) { }
  getExp1() {
    this.htt.getExp1().subscribe((data: any) => {
      this.expenses = data;
      console.log(this.expenses);
    });
  }

  ngOnInit(): void {
    this.getExp1()
  }

 }
