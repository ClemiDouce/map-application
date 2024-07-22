import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { CapitalPannelComponent } from './capital-pannel/capital-pannel.component';

export const routes: Routes = [
  { path: 'town-pannel', component: CapitalPannelComponent },
  { path: 'map', component: MapComponent },
];
