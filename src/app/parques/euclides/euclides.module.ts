import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EuclidesPageRoutingModule } from './euclides-routing.module';

import { EuclidesPage } from './euclides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EuclidesPageRoutingModule
  ],
  declarations: [EuclidesPage]
})
export class EuclidesPageModule {}
