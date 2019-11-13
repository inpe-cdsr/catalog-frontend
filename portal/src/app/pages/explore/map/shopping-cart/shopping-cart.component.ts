import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-map-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    public quantity: number;

    ngOnInit(): void {
        this.quantity = 0;
    }
  
}