import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id: any = '';
  accordion(ids: any) {
    if (this.id == ids) {
      this.id = '';
    }
    else {
      this.id = ids;
    }
  }

}