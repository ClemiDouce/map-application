import { Component, Input } from '@angular/core';
import { Town } from '../../towns.service';

@Component({
  selector: 'town-card',
  standalone: true,
  imports: [],
  templateUrl: './town-card.component.html',
  styleUrl: './town-card.component.scss',
})
export class TownCardComponent {
  @Input({ required: true }) townData: Town;
}
