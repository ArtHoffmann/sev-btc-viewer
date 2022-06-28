import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcDetailsComponent } from './btc-details.component';

describe('BtcDetailsComponent', () => {
  let component: BtcDetailsComponent;
  let fixture: ComponentFixture<BtcDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtcDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
