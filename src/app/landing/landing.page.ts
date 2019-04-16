import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private oauthService:OAuthService,private navCtrl: NavController) { }

  ngOnInit() {
    if (this.oauthService.hasValidAccessToken()) {
      this.navCtrl.navigateRoot('/home');
    }
 }

 login() {
   //this.oauthService.initImplicitFlow();
    this.navCtrl.navigateForward('/login');
 }

 signup() {
   this.navCtrl.navigateForward('/signup');
 }

}
