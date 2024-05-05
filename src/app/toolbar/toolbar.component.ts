import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CoffeeListComponent } from '../coffee-list/CoffeeListComponent';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private modalService: NzModalService) {}

  navigateToHome(): void {
    // Implementă navigarea către pagina de acasă
  }

  navigateToLogin(): void {
    // Implementă navigarea către pagina de autentificare
  }

  openCoffeeModal(): void {
    this.modalService.create({
      nzTitle: 'Coffe List',
      nzContent: CoffeeListComponent,
      nzFooter: null,
      nzWidth: '80%'
    });
  }
}
