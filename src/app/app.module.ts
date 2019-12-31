import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NamePage } from './modal/name/name.page';
import { Test1Page } from './modal/test1/test1.page';
import { Test2Page } from './modal/test2/test2.page';
import { Test3Page } from './modal/test3/test3.page';
import { Test4Page } from './modal/test4/test4.page';
import { Test5Page } from './modal/test5/test5.page';
import { ResultPage } from './modal/result/result.page';

@NgModule({
  declarations: [
    AppComponent,
    NamePage,
    Test1Page,
    Test2Page,
    Test3Page,
    Test4Page,
    Test5Page,
    ResultPage,
  ],
  entryComponents: [
    NamePage,
    Test1Page,
    Test2Page,
    Test3Page,
    Test4Page,
    Test5Page,
    ResultPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
