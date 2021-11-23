import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PayrollService } from '../payroll.service';

@Component({
  selector: 'app-report-payroll',
  templateUrl: './report-payroll.component.html',
  styleUrls: ['./report-payroll.component.css']
})
export class ReportPayrollComponent implements OnInit {
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