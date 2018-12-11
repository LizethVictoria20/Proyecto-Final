import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  descripcion = { name:'BullDog Francés', precio:'1.000.000', descripcion:'Es sociable, alegre, juguetón, deportivo y despierto.', imagen:'https://instagram.feoh1-1.fna.fbcdn.net/vp/b9c132c8581b6aa9ca375fb08193ab96/5CAE8F16/t51.2885-15/e35/46390280_345905005988826_6916671185503699581_n.jpg' }
  raza: Object

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('razaId');
    console.log(`El id es ${id}`)
  }

}
