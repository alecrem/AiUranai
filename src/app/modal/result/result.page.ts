import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  name: string;

  constructor(
    navParams: NavParams,
    public modalController: ModalController,
  ) {
    this.name = navParams.get('name');
    console.log("name for template", this.name);
  }


  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

}
