import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  constructor(
    public modalController: ModalController,
    ) {
  }


  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

}
