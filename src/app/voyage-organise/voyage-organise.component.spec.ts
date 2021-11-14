import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageOrganiseComponent } from './voyage-organise.component';

describe('VoyageOrganiseComponent', () => {
  let component: VoyageOrganiseComponent;
  let fixture: ComponentFixture<VoyageOrganiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageOrganiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageOrganiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
