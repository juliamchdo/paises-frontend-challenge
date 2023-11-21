import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesListComponent } from './paises-list/paises-list.component';
import { PaisesNewComponent } from './paises-new/paises-new.component';


const routes: Routes = [
  {path: '', component: PaisesListComponent},
  {path: 'new', component: PaisesNewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
