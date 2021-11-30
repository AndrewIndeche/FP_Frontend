
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentDate = Date.now();

  navbarOpen = false;
  searchname:any

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private search:SearchService) { }
  // getExpense() {
  //   this.search.searchname().subscribe((data: any) => {
  //     this.searchname = data;
  //     console.log(this.searchname);
  //   });
  // }

  ngOnInit(): void {
    // this.getExpense()
  }

}