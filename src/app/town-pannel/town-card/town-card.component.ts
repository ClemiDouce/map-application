import { Component, Input } from '@angular/core';
import { Town, TownsService } from '../../towns.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'town-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './town-card.component.html',
  styleUrl: './town-card.component.scss',
})
export class TownCardComponent {
  newData = {
    id: 0,
    name: '',
    population: 0,
    latitude: 0,
    longitude: 0,
  };
  @Input({ required: true }) townData: Town;
  modifying: boolean = false;

  constructor(private townService: TownsService) {}

  onValidateChange() {
    console.log('From Validate: ' + this.newData);
    this.townService.modifyTown(this.townData.id, this.newData);
    this.modifying = false;
  }

  onTownModify() {
    this.newData = this.townData;
    this.modifying = true;
  }
}
