import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAnimaisComponent } from './list-animais/list-animais.component';

const routes: Routes = [
  {
    path: '',
    component: ListAnimaisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
