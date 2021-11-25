import { Component, OnInit } from '@angular/core';
import { RunpayService } from '../services/runpay.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-advance-request',
  templateUrl: './advance-request.component.html',
  styleUrls: ['./advance-request.component.css']
})
export class AdvanceRequestComponent implements OnInit {
  staff:any
  staff2:any
  staff3:any
  constructor(private nameser:RunpayService) { }
  getStaff() {
    this.nameser.getAdvanceRe().subscribe((data: any) => {
      this.staff = data;
      console.log(this.staff);
    });
  }
  ngOnInit(): void {
    this.getStaff()
  }
}
