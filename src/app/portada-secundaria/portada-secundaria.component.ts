import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portada-secundaria',
  templateUrl: './portada-secundaria.component.html',
  styleUrls: ['./portada-secundaria.component.css']
})
export class PortadaSecundariaComponent implements OnInit {
  @Input() title:string
  constructor() { }

  ngOnInit() {
  }

}
