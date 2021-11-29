import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { Staff } from '../classes/staff';

@Component({
  selector: 'app-p9-forms',
  templateUrl: './p9-forms.component.html',
  styleUrls: ['./p9-forms.component.css']
})
export class P9FormsComponent implements OnInit {
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
