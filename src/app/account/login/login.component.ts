import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    login: '',
    password: ''
  }

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit(){
    try {
      console.log(this.login);
      const result = await this.accountService.login(this.login);
      console.log(`Login Efetuado: ${result} `);

      this.router.navigate(['']);
    } catch (error){
      console.error(error);
    }
  }


}
