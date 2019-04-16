import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalePage } from './sale.page';
import { UserOptionsPopoverComponent } from '../user-options-popover/user-options-popover.component';

const routes: Routes = [
  {
    path: '',
    component: SalePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalePage, UserOptionsPopoverComponent],
  entryComponents: [UserOptionsPopoverComponent]
})
export class SalePageModule {}
