import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcConverterComponent } from './btc-converter.component';

describe('BtcConverterComponent', () => {
  let component: BtcConverterComponent;
  let fixture: ComponentFixture<BtcConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtcConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
