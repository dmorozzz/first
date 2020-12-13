import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/addpage/addpage.module').then(m => m.AddpageModule),
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/editpage/editpage.module').then(m => m.EditpageModule),
  },
  {
    path: 'post/:id',
    loadChildren: () => import('./pages/postpage/postpage.module').then(m => m.PostpageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
