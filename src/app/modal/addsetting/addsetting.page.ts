import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addsetting',
  templateUrl: './addsetting.page.html',
  styleUrls: ['./addsetting.page.scss'],
})
export class AddsettingPage implements OnInit {
  name: string;
  initial: string;
  good: boolean;

  constructor() { }

  ngOnInit() {
  }

}
