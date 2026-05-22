import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOverview } from './status-overview';

describe('StatusOverview', () => {
  let component: StatusOverview;
  let fixture: ComponentFixture<StatusOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
