import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ListCityComponent } from './list-city/list-city.component';
import { CreateCityComponent } from './create-city/create-city.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteCityComponent } from './delete-city/delete-city.component';

const routes: Routes = [
  {path: 'create', component: CreateCityComponent},
  {path: '', component: ListCityComponent},
  {path:'delete/:id' , component: DeleteCityComponent}
]

@NgModule({
  declarations: [
    ListCityComponent,
    CreateCityComponent,
    HomeComponent,
    DeleteCityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class CityModule { }
