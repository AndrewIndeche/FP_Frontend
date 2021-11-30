import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchname:any

  constructor(private search:SearchService) { }
  getNames() {
    this.search.searchName1().subscribe((data: any) => {
      this.searchname = data;
      console.log(this.searchname);
    });
  }


  ngOnInit(): void {
    this.getNames()
  }

}
