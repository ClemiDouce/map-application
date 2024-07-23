import { Injectable } from '@angular/core';
import * as townsData from '../assets/capital_list.json';

export interface Town {
  id: number;
  name: string;
  population: number;
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root',
})
export class TownsService {
  towns: Town[] = [];

  constructor() {
    let sessionItems = sessionStorage.getItem('towns-list');
    if (sessionItems !== null) {
      let parsedTowns = JSON.parse(sessionItems);
      parsedTowns.forEach((element, index) => {
        let newTown = {
          id: index,
          name: element.name,
          population: element.population,
          latitude: element.latitude,
          longitude: element.longitude,
        };
        this.towns.push(newTown);
      });
    } else {
      townsData.capitals.forEach((element, index) => {
        let newTown = {
          id: index,
          name: element.name,
          population: element.population,
          latitude: element.lat,
          longitude: element.long,
        };
        this.towns.push(newTown);
      });

      sessionStorage.setItem('town_list', JSON.stringify(this.towns));
    }
  }

  addTown(town: Town) {
    this.towns.push(town);
  }

  removeTown(name: string) {
    this.towns.filter((item) => item.name === name);
  }

  getTown(name: string) {
    return this.towns.find((item) => item.name === name);
  }

  modifyTown(id: number, modification: Town) {
    let town = this.towns.find((item) => item.id === id);
    if (town !== undefined) {
      console.log('Trouvé, on change tout maintenant');
      console.log(modification);
      town.name = modification.name;
      town.population = modification.population;
      town.latitude = modification.latitude;
      town.longitude = modification.longitude;
    }
    console.log(town);
  }
}
