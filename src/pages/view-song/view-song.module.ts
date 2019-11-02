import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewSongPage } from './view-song';

@NgModule({
  declarations: [
    ViewSongPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewSongPage),
  ],
})
export class ViewSongPageModule {}
