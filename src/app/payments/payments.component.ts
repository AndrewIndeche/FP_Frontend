import { Component, OnInit } from '@angular/core';
import { ApproveExpenseService } from '../services/approve-expenses.service';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  paymentOne:any
  paymentTwo:any
  paymentThree:any
  constructor( private paysection:ApproveExpenseService) { }
  getPayment() {
    this.paysection.getPayrollOne().subscribe((data: any) => {
      this.paymentOne = data;
      console.log(this.paymentOne);
    });
  }
  getPaymentTwo() {
    this.paysection.getPayrollTwo().subscribe((data: any) => {
      this.paymentTwo = data;
      console.log(this.paymentTwo);
    });
  }
  getPaymentThree() {
    this.paysection.getPayrollThree().subscribe((data: any) => {
      this.paymentThree = data;
      console.log(this.paymentThree);
    });
  }
  ngOnInit(): void {
    this.getPayment()
    this.getPaymentTwo()
    this.getPaymentThree()
  }
}
