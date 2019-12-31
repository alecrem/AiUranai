import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Test4Page } from './test4.page';

describe('Test4Page', () => {
  let component: Test4Page;
  let fixture: ComponentFixture<Test4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Test4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
