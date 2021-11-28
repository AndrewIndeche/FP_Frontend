import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  url4='https://machachari.herokuapp.com/'

  constructor(private http: HttpClient) { }

   // login user
   loginUser(email: string, password: string) {
    return this.http.post(
      this.url4 + 'account/login/',
      {
        username: email,
        password: password,
      },
      // {
      //   headers: {
      //     Authorization: 'Token ' + this.token,
      //   },
      // }
    );
  }


}
