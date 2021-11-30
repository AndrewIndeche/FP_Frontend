import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Staff } from '../classes/staff';
@Component({
  selector: 'app-staff-payslips',
  templateUrl: './staff-payslips.component.html',
  styleUrls: ['./staff-payslips.component.css']
})
export class StaffPayslipsComponent implements OnInit {
  constructor(private api:ApiService) { }
  lststaff: Staff[] = [];
  ngOnInit(){
    this.api.getstaff().subscribe(
      data=>{
        this.lststaff=data;
      }
    )
  }
}
