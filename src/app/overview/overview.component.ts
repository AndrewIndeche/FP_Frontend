import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { Staff } from '../classes/staff';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  staff:any
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
