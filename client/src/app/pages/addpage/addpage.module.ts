import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { AddpageComponent } from './addpage.component';


const routes: Routes = [
  { path: '', component: AddpageComponent }
]

@NgModule({
  declarations: [AddpageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AddpageComponent
  ]
})
export class AddpageModule { }
