import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  url4='https://machachari.herokuapp.com/'
  token='14e6982048c747537b63206e1343e4aa4a20f17c'

  constructor(private http: HttpClient) { }

   // login user
   loginUser(email: string, password: string) {
    return this.http.post(
      this.url4 + 'account/login/',
      {
        email: email,
        password: password,
      },
      {
        headers: {
          Authorization: 'Token ' + this.token,
        },
      }
    );
  }


}
