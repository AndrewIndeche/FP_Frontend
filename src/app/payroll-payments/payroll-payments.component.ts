import { Component, OnInit } from '@angular/core';
import { ApproveExpenseService } from '../services/approve-expenses.service';
@Component({
  selector: 'app-payroll-payments',
  templateUrl: './payroll-payments.component.html',
  styleUrls: ['./payroll-payments.component.css']
})
export class PayrollPaymentsComponent implements OnInit {
  payrollOne:any
  payrollTwo:any
  constructor(private findPayroll:ApproveExpenseService) { }
  getPayOne() {
    this.findPayroll.getPayrollA().subscribe((data: any) => {
      this.payrollOne= data;
      console.log(this.payrollOne);
    });
  }
  getPayTwo() {
    this.findPayroll.getPayrollB().subscribe((data: any) => {
      this.payrollTwo= data;
      console.log(this.payrollTwo);
    });
  }
  ngOnInit(): void {
  this.getPayOne()
  this.getPayTwo()
  }
}
