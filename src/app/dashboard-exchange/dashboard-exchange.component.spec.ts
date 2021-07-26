import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExchangeComponent } from './dashboard-exchange.component';

describe('DashboardExchangeComponent', () => {
  let component: DashboardExchangeComponent;
  let fixture: ComponentFixture<DashboardExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
