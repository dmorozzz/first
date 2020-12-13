import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditpageComponent } from './editpage.component';


const routes: Routes = [
  {path: '', component: EditpageComponent}
]

@NgModule({
  declarations: [EditpageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    EditpageComponent
  ]
})
export class EditpageModule { }
