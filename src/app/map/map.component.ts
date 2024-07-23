import { AfterViewInit, Component } from '@angular/core';
import { TownsService } from '../towns.service';
import * as L from 'leaflet';

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

  constructor(private townService: TownsService) {
    this.markers = [];
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
    this.centerMap();
  }

  private initMap(): void {
    let map = new L.Map('map', {
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

    tiles.addTo(map);
    map.on('locationfound', (e) => {
      var radius = e.accuracy;

      L.marker(e.latlng).addTo(map).bindPopup('Vous êtes ici !').openPopup();

      L.circle(e.latlng, { radius }).addTo(this.map);
    });
    map.on('locationerror', (e) => {
      console.log(e.message);
    });

    this.map = map;
  }

  private addMarkers() {
    // Ajouter les markers contenu dans le fichier json
    this.townService.towns.forEach((element) => {
      var marker = L.marker([element.latitude, element.longitude]).addTo(
        this.map
      );
      marker.bindPopup(
        `<b>Name : ${
          element.name
        }</b> <br>Population: ${element.population.toLocaleString('fr-FR')}`
      );
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
    this.map.locate({ setView: true, maxZoom: 16, enableHighAccuracy: true });
  }
}
