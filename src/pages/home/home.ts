import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    

  }
  login(){
    this.navCtrl.setRoot("CategoriasPage");
  }
}
