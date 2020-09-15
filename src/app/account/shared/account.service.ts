import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { resolve } from 'url';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any){
    const result = await this.http.post<any>(`${environment.api}/api/signin`, user).toPromise();
    if (result && result.access_token) {
      window.localStorage.setItem('token', result.access_token);
      return true;
    }
    return false;
    
    /*return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
    */
  }

  createAccount(account: any){
    return new Promise ((resolve) => {
      resolve(true);    
    });
  }

}
