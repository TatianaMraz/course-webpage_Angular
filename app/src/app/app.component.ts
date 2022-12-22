import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature = '';

  onNavigate(feature: string) {
    // take feature emitted out of header component and assign the value to the loadedFeature
    this.loadedFeature = feature;
  }
}
