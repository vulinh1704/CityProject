import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./city/home/home.component";

const routes: Routes = [
  {
    path: 'city',
    component: HomeComponent,
    loadChildren: () => import('./city/city.module').then(module => module.CityModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
