import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesListComponent } from './paises-list/paises-list.component';
import { PaisesNewComponent } from './paises-new/paises-new.component';


@NgModule({
  declarations: [
    PaisesListComponent,
    PaisesNewComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
