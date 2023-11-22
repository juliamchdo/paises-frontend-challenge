import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesListComponent } from './paises-list/paises-list.component';
import { PaisesNewComponent } from './paises-new/paises-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaisesEditComponent } from './paises-edit/paises-edit.component';


@NgModule({
  declarations: [
    PaisesListComponent,
    PaisesNewComponent,
    PaisesEditComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PaisesModule { }
