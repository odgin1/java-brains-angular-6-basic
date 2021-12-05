import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from '../child-a/child-a.component';
import { ChildBComponent } from '../child-b/child-b.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SettingsComponent } from '../settings/settings.component';

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('../home/home.component').then(m => m.HomeComponent)
//   },
//   {
//     path: 'settings',
//     loadChildren: () => import('../settings/settings.component').then(m => m.SettingsComponent)
//   }
// ];

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'settings', 
    component: SettingsComponent,
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ]
  },
  { path: '',   redirectTo: '/homeComponent', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent} // Wildcard route for a 404 page, should be last
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
