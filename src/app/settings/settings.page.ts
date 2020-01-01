import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { AddsettingPage } from '../modal/addsetting/addsetting.page';

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
    public modalController: ModalController,
  ) {}

  async ngOnInit() {
    if (await this.settingsExist() == false) {
      this.initSettings();
    } else {
      console.log("Settings are present on Storage");
      this.loadSettings();
    }
  }

  async addSettingModal() {
    const modal = await this.modalController.create({
      component: AddsettingPage,
    });
    modal.onDidDismiss().then((data) => {
      this.settings.push({
        name: (<Setting>data).name,
        initial: (<Setting>data).initial,
        good: (<Setting>data).good,
      });
      this.updateSettings();
    });
    return await modal.present();
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
    this.updateSettings();
  }

  async settingsExist() {
    return (await Storage.get({ key: 'settings' })).value !== null;
  }
  async loadSettings() {
    const ret = (await Storage.get({ key: 'settings' })).value;
    console.log('Loading settings from Storage', JSON.stringify(ret));
    this.settings = [];
    const setts = JSON.parse(ret);
    if(setts.length > 0) {
      setts.forEach((ret) => {
        this.settings.push(<Setting>ret);
      });
    }
  }
  async initSettings() {
    console.log('Initialising settings on Storage');
    await Storage.set({
      key: 'settings',
      value: JSON.stringify(settings),
    });
  }
  async updateSettings() {
    console.log('Updating settings on Storage', JSON.stringify(this.settings));
    await Storage.set({
      key: 'settings',
      value: JSON.stringify(this.settings),
    });
  }

}
