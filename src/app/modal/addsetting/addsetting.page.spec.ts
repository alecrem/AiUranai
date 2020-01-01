import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddsettingPage } from './addsetting.page';

describe('AddsettingPage', () => {
  let component: AddsettingPage;
  let fixture: ComponentFixture<AddsettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddsettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
