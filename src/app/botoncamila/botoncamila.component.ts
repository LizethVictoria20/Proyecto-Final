import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botoncamila',
  templateUrl: './botoncamila.component.html',
  styleUrls: ['./botoncamila.component.css']
})
export class BotoncamilaComponent implements OnInit {
@Input() mensaje: string

  constructor() { }

  ngOnInit() {
  }

}
