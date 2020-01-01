import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Test5Page } from '../test5/test5.page';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.page.html',
  styleUrls: ['./test4.page.scss'],
})
export class Test4Page implements OnInit {

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
    });
  }

}
