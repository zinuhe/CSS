import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Css1Component } from './css1/css1.component';
import { Css2Component } from './css2/css2.component';

// const routes: Routes = [];
const routes: Routes = [
  // { path: '', redirectTo: '/areas', pathMatch: 'full' },
  { path: 'css1', component: Css1Component },               // CSS1
  { path: 'css2', component: Css2Component },               // CSS2

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
