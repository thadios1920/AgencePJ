import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroisiereComponent } from './croisiere.component';

describe('CroisiereComponent', () => {
  let component: CroisiereComponent;
  let fixture: ComponentFixture<CroisiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroisiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CroisiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
