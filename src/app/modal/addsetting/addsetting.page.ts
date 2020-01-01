import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addsetting',
  templateUrl: './addsetting.page.html',
  styleUrls: ['./addsetting.page.scss'],
})
export class AddsettingPage implements OnInit {
  name: string = '';
  initial: string = '';
  good: string = 'true';

  get submittable() {
    if (
      this.name.trim() == '' ||
      this.initial.trim().length!=1
    ) {
      return false;
    }
    return true;
  }

  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  save() {
    this.modalController.dismiss({
      'dismissed': true,
      'data': {
        name: this.name.trim(),
        initial: this.initial.trim(),
        good: this.good,
      }
    });
  }

}
