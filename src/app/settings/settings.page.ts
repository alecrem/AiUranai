import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

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
  ) {}

  async ngOnInit() {
    if (await this.settingsExist() == false) {
      this.initSettings();
    } else {
      this.loadSettings();
    }
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
    this.settings = this.settings.filter((setting) => {
      return setting.name != name;
    });
    this.updateSettings();
  }

  async settingsExist() {
    return (await Storage.get({ key: 'settings' })).value !== null;
  }
  async loadSettings() {
    const ret = (await Storage.get({ key: 'settings' })).value;
    this.settings = [];
    const setts = JSON.parse(ret);
    if(setts.length > 0) {
      setts.forEach((ret) => {
        this.settings.push(<Setting>ret);
      });
    }
  }
  async initSettings() {
    await Storage.set({
      key: 'settings',
      value: JSON.stringify(settings),
    });
  }
  async updateSettings() {
    await Storage.set({
      key: 'settings',
      value: JSON.stringify(this.settings),
    });
  }

}
