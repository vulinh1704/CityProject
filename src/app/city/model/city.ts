import {Country} from "./country";

export class City {
  id:number;
  name: string;
  country: Country;
  area: number;
  population: number;
  gdp: number;
  description: string

  constructor(id: number, name: string, country: Country, area: number, population: number, gdp: number, description: string) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.area = area;
    this.population = population;
    this.gdp = gdp;
    this.description = description;
  }
}
