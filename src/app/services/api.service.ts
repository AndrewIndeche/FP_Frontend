import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpclient:HttpClient){}
    getstaff():Observable<any>{
        return this.httpclient.get('https://financefuzu.herokuapp.com/finance/api/staffw/')
    }
  }
