import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(
    public alertController: AlertController,
    public router: Router,
  ) {}

  ngOnInit() {
  }

  async login() {
    if(this.email == credentials.email && this.password == credentials.password) {
      console.log("ログイン成功");
      this.router.navigate(['/settings']);
    } else {
      this.email = '';
      this.password = '';
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '認証エラー',
      subHeader: 'ログインが失敗しました',
      message: 'メールアドレスがサーバーで登録されていない、もしくはパスワードが間違っている。',
      buttons: ['閉じる']
    });

    await alert.present();
  }


}
