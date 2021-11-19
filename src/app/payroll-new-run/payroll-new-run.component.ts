import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PayrollService } from '../payroll.service';
@Component({
  selector: 'app-payroll-new-run',
  templateUrl: './payroll-new-run.component.html',
  styleUrls: ['./payroll-new-run.component.css']
})
export class PayrollNewRunComponent implements OnInit {
  payrolls: any;
  getName() {
    this.payroll.getdetails().subscribe((data: any) => {
      this.payrolls = data;
      console.log(this.payrolls);
    });
  }
  constructor(private payroll: PayrollService, private http: HttpClient) { }
  ngOnInit(): void {
    this.getName()
  }
}
