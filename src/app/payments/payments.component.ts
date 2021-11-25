import { Component, OnInit } from '@angular/core';
import { RunpayService } from '../services/runpay.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  pay:any

  constructor(private run:RunpayService) { }
  getPay() {
    this.run.getPaymentsRe().subscribe((data: any) => {
      this.pay = data;
      console.log(this.pay);
    });
  }

  ngOnInit(): void {
    this.getPay() 
  }

}
