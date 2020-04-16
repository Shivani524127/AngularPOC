import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { parse } from 'querystring';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  productName: String;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => 
    {let name = (params.get('id'));
    this.productName=name    
    console.log("---", this.productName);
   } );
  }
  
  share(){
    window.alert("This item has been shared!!");
  }
}
