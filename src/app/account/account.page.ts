import { Component, OnInit } from '@angular/core';

const credentials = {
  email: "karen",
  password: "kaijo",
}

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  async login() {
    if(this.email == credentials.email && this.password == credentials.password) {
      console.log("ログイン成功");
    } else {
      console.log("ログイン失敗");
      console.log(this.email, this.password);
    }
  }

}
