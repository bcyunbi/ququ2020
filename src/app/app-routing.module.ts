import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    children: [{
      path: 'index',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    }]
  },
  // {
  //   path: '',
  //   redirectTo: '/home/index',
  //   pathMatch: 'full',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
