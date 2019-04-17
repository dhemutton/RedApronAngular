import { Component, OnInit } from '@angular/core';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import {SessionService} from '../service/session.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : SubscriptionPlan[] = [];
  size : number;
  totalPrice : number = 0.00;

  constructor(
    private sessionService : SessionService
  ) { }

  ngOnInit() {
    this.cart = JSON.parse(sessionStorage.cart);
    console.log(this.cart);
    this.size = this.cart.length;
    for (var i = 0; i < this.cart.length; i++) {
      var plan = this.cart[i];
      console.log(plan.category.price);
      console.log(plan.numOfRecipes*2.50);
      this.totalPrice += (plan.category.price * plan.numOfWeeks);
      this.totalPrice += (plan.numOfRecipes*2.50);
    }
  }

}
