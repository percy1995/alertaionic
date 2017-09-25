import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {
  }
    doAlert(){
      let alert=this.alertCtrl.create({
        title:'Nueva amigo',
        message:'Hola esto e suna alerta',
        buttons:  ['ok']

      });
   
alert.present();
  }

}
