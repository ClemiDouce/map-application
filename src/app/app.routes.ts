import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { TownPannelComponent } from './town-pannel/town-pannel.component';

export const routes: Routes = [
  { path: 'town-pannel', component: TownPannelComponent },
  { path: 'map', component: MapComponent },
];
