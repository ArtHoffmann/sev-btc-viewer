import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcDiagrammComponent } from './btc-diagramm.component';

describe('BtcDiagrammComponent', () => {
  let component: BtcDiagrammComponent;
  let fixture: ComponentFixture<BtcDiagrammComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtcDiagrammComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcDiagrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
