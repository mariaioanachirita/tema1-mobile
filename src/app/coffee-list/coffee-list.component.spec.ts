import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListComponent } from './CoffeeListComponent';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeListComponent]
    });
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
