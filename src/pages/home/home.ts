import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ServicePage } from '../service/service';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoProfile(){
   // alert("hello")
   //คำสั่ง ในการเปิด page
   this.navCtrl.push(ProfilePage)
  }
   
  gotoService(){
    //alert("hello")
    this.navCtrl.push(ServicePage)
  }

  gotoinfo(){
    //alert('INFO')
    this.navCtrl.push(InfoPage)
  }
}
