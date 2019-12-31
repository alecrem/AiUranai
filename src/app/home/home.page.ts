import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Test1Page } from '../modal/test1/test1.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  async launchTest() {
    const modal = await this.modalController.create({
      component: Test1Page
    });
    return await modal.present();
  }
}
