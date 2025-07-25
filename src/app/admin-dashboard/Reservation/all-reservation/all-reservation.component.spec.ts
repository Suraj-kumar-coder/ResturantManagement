import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReservationComponent } from './all-reservation.component';

describe('AllReservationComponent', () => {
  let component: AllReservationComponent;
  let fixture: ComponentFixture<AllReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
