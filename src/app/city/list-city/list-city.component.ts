import { Component, OnInit } from '@angular/core';
import {City} from "../model/city";
import {CityService} from "../service/city-service";

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {

  cities: City[] = [];

  constructor(private cityService: CityService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.cityService.findAll().subscribe((cities) => {
      this.cities = cities;
      console.log(cities)
    }, error => {
      console.log(error)
    })
  }
}
