import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acc-support',
  templateUrl: './acc-support.component.html',
  styleUrls: ['./acc-support.component.css']
})
export class AccSupportComponent implements OnInit {
  getName(){
    alert("Thank you for your message,we will get back to you")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
