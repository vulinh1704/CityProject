import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CityService} from "../service/city-service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Country} from "../model/country";
import {CountryService} from "../service/country-service";

@Component({
  selector: 'app-delete-city',
  templateUrl: './delete-city.component.html',
  styleUrls: ['./delete-city.component.css']
})
export class DeleteCityComponent implements OnInit {

  cityForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    countryId: new FormControl(''),
    area: new FormControl(''),
    population: new FormControl(''),
    gdp: new FormControl(''),
    description: new FormControl('')
  });
  id: number = 0;
  listCountries: Country[] = [];

  constructor(private cityService: CityService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private countryService: CountryService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getCity(this.id);
      this.countryService.getAll().subscribe((countries) => {
        this.listCountries = countries;
      })
    });
    // @ts-ignore
    $("#modalDelete").modal("show");
  }

  getCity(id: number) {
    return this.cityService.findById(id).subscribe(city => {
      this.cityForm = new FormGroup({
        name: new FormControl(city.name),
        countryId: new FormControl(city.country.id),
        area: new FormControl(city.area),
        population: new FormControl(city.population),
        gdp: new FormControl(city.gdp),
        description: new FormControl(city.description)
      });
    });
  }

  delete(id: number) {
    this.cityService.delete(id).subscribe(() => {
      this.router.navigate(['/city'])
      // @ts-ignore
      $("#modalDelete").modal("hide")
    }, error => {
      console.log(error);
    })
  }

}
