import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResultPage } from '../result/result.page';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.page.html',
  styleUrls: ['./test5.page.scss'],
})
export class Test5Page implements OnInit {

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
