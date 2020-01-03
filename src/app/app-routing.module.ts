import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Css1Component } from './css1/css1.component';
import { Css2Component } from './css2/css2.component';
import { Css3Component } from './css3/css3.component';
import { Css4Component } from './css4/css4.component';
import { Css5Component } from './css5/css5.component';

// const routes: Routes = [];
const routes: Routes = [
  // { path: '', redirectTo: '/areas', pathMatch: 'full' },
  { path: 'css1', component: Css1Component },               // CSS1
  { path: 'css2', component: Css2Component },               // CSS2
  { path: 'css3', component: Css3Component },               // CSS3
  { path: 'css4', component: Css4Component },               // CSS4
  { path: 'css5', component: Css5Component },               // CSS5
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
