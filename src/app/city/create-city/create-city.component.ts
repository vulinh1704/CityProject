import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {City} from "../model/city";
import {CityService} from "../service/city-service";
import {Router, Routes} from "@angular/router";
import {Country} from "../model/country";
import {CountryService} from "../service/country-service";

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit {
  cityForm: FormGroup = new FormGroup({
    name: new FormControl(),
    countryId: new FormControl(),
    area: new FormControl(),
    population: new FormControl(),
    gdp: new FormControl(),
    description: new FormControl()
  })
  cities: any;
  listCountries: Country[] = [];

  constructor(private cityService: CityService,
              private router: Router,
              private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.countryService.getAll().subscribe((countries) => {
      this.listCountries = countries;
    })
  }

  submit() {
    this.cities = {
      name: this.cityForm.value.name,
      country: {
        id: this.cityForm.value.countryId
      },
      area: this.cityForm.value.area,
      population: this.cityForm.value.population,
      gdp: this.cityForm.value.gdp,
      description: this.cityForm.value.description
    }
    console.log(this.cities)
    this.cityService.save(this.cities).subscribe(() => {
      this.router.navigate(['/city'])

      // @ts-ignore
      $("#exampleModal").modal("hide")
      alert('Thành công')
    } , error => {
      console.log(error)
    })
  }
}
