import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { UserOptionsPopoverComponent } from '../user-options-popover/user-options-popover.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {

  constructor(private navController: NavController,
    private popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: UserOptionsPopoverComponent,
      event: ev,
      translucent: true,
      backdropDismiss: true
    });
    return await popover.present();
  }

}
