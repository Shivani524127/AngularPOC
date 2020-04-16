import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert("Product has been Shared");
  }

  addToCart() {
    window.alert("Product has been added to your cart");
  }

   products = [{
    "id": 1,
    "productName": "Cadillac",
    "productDetail": "Eldorado",
    "price": "$939.04"
  }, {
    "id": 2,
    "productName": "GMC",
    "productDetail": "Sonoma Club Coupe",
    "price": "$676.40"
  }, {
    "id": 3,
    "productName": "GMC",
    "productDetail": "Sonoma",
    "price": "$390.75"
  }, {
    "id": 4,
    "productName": "Volkswagen",
    "productDetail": "Jetta",
    "price": "$526.94"
  }, {
    "id": 5,
    "productName": "Buick",
    "productDetail": "Regal",
    "price": "$258.89"
  }, {
    "id": 6,
    "productName": "Mazda",
    "productDetail": "Mazda6",
    "price": "$534.88"
  }, {
    "id": 7,
    "productName": "Dodge",
    "productDetail": "Grand Caravan",
    "price": "$701.87"
  }, {
    "id": 8,
    "productName": "Volkswagen",
    "productDetail": "Golf",
    "price": "$130.22"
  }, {
    "id": 9,
    "productName": "Land Rover",
    "productDetail": "Range Rover",
    "price": "$854.15"
  }, {
    "id": 10,
    "productName": "Porsche",
    "productDetail": "Boxster",
    "price": "$851.96"
  }];

}
