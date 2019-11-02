import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Band } from '../../models/band.model';
import { SongsService } from '../../services/songs.service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  band: Band = {
    name: ''
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private songService: SongsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  addBand(band: Band) {
    this.songService.addBand(band).then(ref => {
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }

}
