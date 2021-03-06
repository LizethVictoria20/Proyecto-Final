import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  razas = [
    {"id": "26c1a61f", name:'BullDog Francés', url:'https://instagram.feoh1-1.fna.fbcdn.net/vp/b9c132c8581b6aa9ca375fb08193ab96/5CAE8F16/t51.2885-15/e35/46390280_345905005988826_6916671185503699581_n.jpg', precio:'Precio $1.000.000'},
    {"id": "66e3aeb1", name:'Pomerania Lulú', url:'https://instagram.feoh1-1.fna.fbcdn.net/vp/dd091fe096b38ca5b727b0831abb994f/5C8F3A70/t51.2885-15/e35/43915188_480701289106167_5301771529289433451_n.jpg?_nc_ht=instagram.feoh1-1.fna.fbcdn.net', precio:'Precio $1.200.000'},
    {"id": "6a530fe5", name:'Yorkshire', url:'https://instagram.feoh1-1.fna.fbcdn.net/vp/707538b6e47a9866f401e1adb911a4f2/5C9024C0/t51.2885-15/e35/36159595_285291452042860_8792377201187094528_n.jpg', precio:'Precio $1.400.000'},
    {"id": "a6dabbe5", name:'Shih Tzu', url:'https://instagram.feoh1-1.fna.fbcdn.net/vp/714e8c40ee4294639a4f8f5f07a5d201/5C8FE214/t51.2885-15/e35/31816465_172015550303212_6471307210059153408_n.jpg', precio:'Precio $1.250.000'},
    {"id": "550928bc", name:'Pomerania Boo', url:'https://instagram.feoh1-1.fna.fbcdn.net/vp/106b2c935dba0a4575d8e9e913637d93/5CAD8168/t51.2885-15/e35/37989060_2261068750783437_4521312051024363520_n.jpg', precio:'Precio $1.300.00'},
    {"id": "2382c178", name:'Puppiesmini', url:'https://instagram.feoh1-1.fna.fbcdn.net/vp/5187ac2b496694929ccdfae85f9c2653/5C9F42CF/t51.2885-15/e35/42141247_687547578290574_3465667924487737609_n.jpg', precio:'Precio $1.900.000'},
    {"id": "bcf9a255", name:'Chihuahua', url:'https://instagram.feoh1-1.fna.fbcdn.net/vp/1c2263cd4438a1f1e3566f21b83907ba/5CA75899/t51.2885-15/e35/36592912_174690713405625_1311563766726393856_n.jpg', precio:'Precio $1.700.000'},
    {"id": "0722588a", name:'Schnauzer', url:'https://instagram.feoh1-1.fna.fbcdn.net/vp/4bedc030a90c6f9218c1ac330a35f3a5/5C97F6FD/t51.2885-15/e35/30591628_2147547728801387_7133507720182759424_n.jpg', precio:'Precio $1.500.00'},
    {"id": "21cec11a", name:'BullDog Ingles', url:'https://instagram.feoh1-1.fna.fbcdn.net/vp/1c9d2115978a119792d8a30d447cb921/5C8D1F9A/t51.2885-15/e35/26158412_138612903474393_7082649109760311296_n.jpg', precio:'precio $1.800.000'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
