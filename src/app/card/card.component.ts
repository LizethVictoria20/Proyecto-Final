import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() raza : string
  @Input() imagen : string
  @Input() precio : string
  @Input() id : string

  constructor() { }

  ngOnInit() {
  }

}
