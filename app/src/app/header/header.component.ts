import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // emit featureSelected out of component
  @Output() featureSelected = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  // on click trigger function onSelect
  onSelect(feature: string) {
    // emit feature to the featureSelected
    this.featureSelected.emit(feature);
  }

}
