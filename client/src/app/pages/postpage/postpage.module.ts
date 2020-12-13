import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostpageComponent } from './postpage.component';


const routes: Routes = [
  { path: '', component: PostpageComponent }
]


@NgModule({
  declarations: [PostpageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PostpageComponent
  ]
})
export class PostpageModule { }
