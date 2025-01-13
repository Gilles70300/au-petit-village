import { Component } from '@angular/core';
import { Price } from '../price';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  prices: Price[] = [
    { name: "Astérix", price: 45 },
    { name: "Obélix", price:72 },
    { name: "Idéfix", price: 50 },
    { name: "Panoramix", price: 69},
    { name: "Assurancetourix", price: 69}
  ];
  orderBy: "asc" | "desc" = "asc";
}
