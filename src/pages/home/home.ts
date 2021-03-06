import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthService
  ) { }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }

  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfullLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});
  }

  login (){
    this
      .auth
      .authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfullLogin(response.headers.get("Authorization"))
        this.navCtrl.setRoot('CategoriasPage');
      })
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

}
