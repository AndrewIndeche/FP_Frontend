import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchname:any
  url2='https://financefuzu.herokuapp.com/finance/api/'

  constructor(private http: HttpClient) { 
    console.log("ready");
    this.searchname = "";
  }
  searchName1() {
    return this.http.get(this.url2 + 'approvew/');
  }
}
