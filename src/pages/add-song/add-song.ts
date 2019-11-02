import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song.model';
import { SongsService } from '../../services/songs.service';

/**
 * Generated class for the AddSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-song',
  templateUrl: 'add-song.html',
})
export class AddSongPage {

  song: Song = {
    title: '',
    chords: '',
    lyrics: '',
    band: ''
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private songsService: SongsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSongPage');
  }

  addSong(song: Song) {
    this.songsService.addSong(song).then(ref => {
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }
}
