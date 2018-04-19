import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BinsPage } from './bins';

@NgModule({
  declarations: [
    BinsPage,
  ],
  imports: [
    IonicPageModule.forChild(BinsPage),
  ],
})
export class BinsPageModule {}
