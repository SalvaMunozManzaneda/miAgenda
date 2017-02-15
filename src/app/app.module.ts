import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


export const firebaseConfig = {
    apiKey: "AIzaSyB6NL_cZ3IPdpMd7cv8Z_RAwRKfOK7S-kM",
    authDomain: "agenda-b5990.firebaseapp.com",
    databaseURL: "https://agenda-b5990.firebaseio.com",
    storageBucket: "agenda-b5990.appspot.com",
    messagingSenderId: "10838084881"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
