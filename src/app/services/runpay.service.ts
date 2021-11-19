import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ename } from '../classes/ename';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RunpayService {
  url='http://127.0.0.1:8000/api/'
  url2='https://financefuzu.herokuapp.com/finance/api/'
  name!:Ename;
  constructor(private http: HttpClient) {
   }
  getName1() {
    return this.http.get(this.url2 + 'approve/4/');
  }
  getName2() {
    return this.http.get(this.url2 + 'approve/5/');
  }
  getName3() {
    return this.http.get(this.url2 + 'approve/6/');
  }
  getStaff1() {
    return this.http.get(this.url2 + 'staff/1/');
  }
}
