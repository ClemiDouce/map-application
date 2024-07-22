import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import * as capitalsData from '../../assets/capital_list.json';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit {
  private map;
  private markers: L.Marker[] = [];

  constructor() {
    this.markers = [];
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
    this.centerMap();
  }

  private initMap(): void {
    //Initialise la map Leaflet
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  private addMarkers() {
    // Ajouter les markers contenu dans le fichier json
    capitalsData.capitals.forEach((element) => {
      console.log(element.name);
      var marker = L.marker([element.lat, element.long]).addTo(this.map);
      marker
        .bindPopup(`<b>Name : ${element.name}</b>\nPop: ${element.population}`)
        .openPopup();
      this.markers.push(marker);
    });
  }

  private centerMap() {
    // Creer une vue qui englobe toutes les capitales
    const bounds = L.latLngBounds(
      this.markers.map((marker) => marker.getLatLng())
    );

    this.map.fitBounds(bounds);
  }

  onLocateMe() {
    console.log('Tu es juste la !');
  }
}
