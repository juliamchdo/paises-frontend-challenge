import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesListComponent } from './paises-list/paises-list.component';
import { PaisesNewComponent } from './paises-new/paises-new.component';
import { PaisesEditComponent } from './paises-edit/paises-edit.component';


const routes: Routes = [
  {path: '', component: PaisesListComponent},
  {path: 'new', component: PaisesNewComponent},
  {path: 'edit/:id', component: PaisesEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
