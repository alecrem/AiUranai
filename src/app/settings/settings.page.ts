import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

class Setting {
  name: string;
  initial: string;
  good: boolean;
}

const settings = [
  {
    name: 'あい',
    initial: 'a',
    good: true,
  },
  {
    name: 'まりな',
    initial: 'n',
    good: false,
  },
]
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settings: Setting[] = [];

  constructor(
    public alertController: AlertController,
  ) {
    settings.forEach((setting) => {
      this.settings.push(<Setting>setting);
    });
    console.log(this.settings);
  }

  ngOnInit() {
  }

  async confirmDeletion(name: string) {
    const alert = await this.alertController.create({
      header: '削除の確認',
      subHeader: 'OKすると項目が削除されます',
      message: '本当にこの項目を削除してもいいですか？',
      buttons: [
        {
          text: 'キャンセル',
          role: 'cancel',
          cssClass: 'medium',
        }, {
          text: 'OK',
          handler: () => {
            this.delete(name);
          }
        }
      ]
    });

    await alert.present();
  }
  delete(name: string) {
    console.log("filtering for", name);
    this.settings = this.settings.filter((setting) => {
      return setting.name != name;
    });
  }

}
