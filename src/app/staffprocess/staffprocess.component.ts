import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{StaffProcessService} from '../staff-processes.service'
// import * as jquery from 'jquery';
// import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
export { };
declare global {
  interface Window {
    Calendly: any;
  }
}
declare var preInitCalendly: Function;
@Component({
  selector: 'app-staffprocess',
  templateUrl: './staffprocess.component.html',
  styleUrls: ['./staffprocess.component.css']
})
export class StaffprocessComponent implements OnInit {
  // url = 'https://calendly.com/my_calendly_location';
  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth'
  // };
  staff_details:any;
  getName() {
    this.process.getdetails().subscribe((data: any) => {
      this.staff_details = data;
      console.log(this.staff_details);
    });
  }
  // $scope.getTotal = function () {
  //   var total = 0;
  //   for (var i = 0; i < $scope.staff_details.length; i++) {
  //     var product = $scope.staff_details[i];
  //     total += product.gross_pay;
  //   };
  //   return total;
  // }
  constructor(private process :  StaffProcessService, private http: HttpClient) { }
  ngOnInit() {
    this.getName()
  }
}
