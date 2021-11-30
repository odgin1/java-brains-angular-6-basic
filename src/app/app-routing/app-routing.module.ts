import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'settings',
    loadChildren: () => import('../settings/settings.component').then(m => m.SettingsComponent)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
