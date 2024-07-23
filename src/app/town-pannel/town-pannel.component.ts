import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TownCardComponent } from './town-card/town-card.component';
import { TownFormComponent } from './town-form/town-form.component';
import { TownsService } from '../towns.service';

@Component({
  selector: 'town-pannel',
  standalone: true,
  imports: [CommonModule, TownCardComponent, TownFormComponent],
  templateUrl: './town-pannel.component.html',
  styleUrl: './town-pannel.component.scss',
})
export class TownPannelComponent {
  constructor(public townService: TownsService) {}
}
