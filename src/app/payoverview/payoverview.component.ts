import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
// import * as myjQuery from 'jquery';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-payoverview',
  templateUrl: './payoverview.component.html',
  styleUrls: ['./payoverview.component.css']
})
export class PayoverviewComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  constructor() { }

  ngOnInit(): void {
    // $(document).ready(function () {


    //   $("").click(function () {
    //     // $( "#datepicker" ).datepicker();
    //   });


    // });

  }

}