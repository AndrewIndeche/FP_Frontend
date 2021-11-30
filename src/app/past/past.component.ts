import { Component, OnInit } from '@angular/core';
import { RunpayService } from '../services/runpay.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {
  staff:any
  staff2:any
  staff3:any
  constructor(private nameser:RunpayService) { }
  getStaff() {
    this.nameser.getStaff1().subscribe((data: any) => {
      this.staff = data;
      console.log(this.staff);
    });
  }
  ngOnInit(): void {
    this.getStaff()
  }
}
