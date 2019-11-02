import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song.model';

/**
 * Generated class for the ViewSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-song',
  templateUrl: 'view-song.html',
})
export class ViewSongPage {
  song: Song;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.song = this.navParams.get('song');
  }

}
