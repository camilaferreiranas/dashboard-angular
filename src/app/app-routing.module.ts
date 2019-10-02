import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from  '@angular/router';
import { ContentComponent } from  './../app/content/content.component';
import {GraficosComponent } from './../app/graficos/graficos.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'graficos', component: GraficosComponent }
  ];
  

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
