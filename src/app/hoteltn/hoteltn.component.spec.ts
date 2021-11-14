import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteltnComponent } from './hoteltn.component';

describe('HoteltnComponent', () => {
  let component: HoteltnComponent;
  let fixture: ComponentFixture<HoteltnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteltnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteltnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
