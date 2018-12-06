import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css']
})
export class RazasComponent implements OnInit {
  @Input() title: string
  @Input() lista: Array<Object>
  constructor() { }

  ngOnInit() {
  }

}
