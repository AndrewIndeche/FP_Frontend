import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PayrollService } from '../payroll.service';
import { StaffProcessService } from '../staff-processes.service'
@Component({
  selector: 'app-payroll-new-run',
  templateUrl: './payroll-new-run.component.html',
  styleUrls: ['./payroll-new-run.component.css']
})
export class PayrollNewRunComponent implements OnInit {
  payrolls: any;
  staffs: any;

  getName() {
    this.payroll.getdetails().subscribe((data: any) => {
      this.payrolls = data;
      console.log(this.payrolls);
    });
  }

  getStaff() {
    this.staff.getdetails().subscribe((data: any) => {
      this.staffs = data;
      console.log(this.staffs);
    });
  }

  constructor(private payroll: PayrollService, private staff: StaffProcessService, private http: HttpClient) { }
  ngOnInit(): void {
    this.getName()
    this.getStaff()
  }
}