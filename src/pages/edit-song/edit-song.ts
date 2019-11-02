import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsService } from '../../services/songs.service';
import { Song } from '../../models/song.model';

/**
 * Generated class for the EditSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-song',
  templateUrl: 'edit-song.html',
})
export class EditSongPage {

  song: Song;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private songsService: SongsService) {
  }

  ionViewWillLoad() {
   this.song = this.navParams.get('song');
  }

  saveSong(song: Song) {
    this.songsService.editSong(song).then(() => {
  this.navCtrl.setRoot('HomePage');
  });
  }

  deleteSong(song: Song) {
    this.songsService.removeSong(song).then(() => {
      this.navCtrl.setRoot('HomePage');
    });
  }

}
