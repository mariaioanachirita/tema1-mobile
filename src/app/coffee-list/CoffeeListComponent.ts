import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';
import { Coffee } from '../models/coffee.model';


@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffees: Coffee[];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.getCoffees(); // La inițializare, apelezi metoda pentru a încărca lista de cafele
  }

  getCoffees(): void {
    this.coffeeService.getCoffees() // Folosești metoda din serviciu pentru a obține lista de cafele
      .subscribe(coffees => this.coffees = coffees); // Salvezi lista de cafele în variabila locală
  }
}
