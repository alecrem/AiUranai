import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Test4Page } from '../test4/test4.page';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.page.html',
  styleUrls: ['./test3.page.scss'],
})
export class Test3Page implements OnInit {

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
