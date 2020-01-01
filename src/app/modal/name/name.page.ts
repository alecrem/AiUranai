import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Test1Page } from '../test1/test1.page';

@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {
  name: string;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async nextQuestion() {
    this.modalController.dismiss({
      'dismissed': true,
      'name': this.name,
    });
  }

}
