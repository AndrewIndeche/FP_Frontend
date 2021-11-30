import { Component, OnInit, EventEmitter ,Output} from '@angular/core';
import { RunpayService } from '../services/runpay.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-payroll-review',
  templateUrl: './payroll-review.component.html',
  styleUrls: ['./payroll-review.component.css']
})
export class PayrollReviewComponent implements OnInit {
  name:any
  name2:any
  name3:any
  constructor( private nameser:RunpayService,private http:HttpClient) { }
  getName() {
    this.nameser.getName1().subscribe((data: any) => {
      this.name = data;
      console.log(this.name);
    });
  }
  getNamek() {
    this.nameser.getName2().subscribe((data: any) => {
      this.name2 = data;
      console.log(this.name2);
    });
  }
  getNamej() {
    this.nameser.getName3().subscribe((data: any) => {
      this.name3 = data;
      console.log(this.name3);
    });
  }
  ngOnInit(): void {
    this.getName();
    this.getNamek()
    this.getNamej()
  }
}
