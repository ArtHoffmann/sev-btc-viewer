import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoinsComponent } from './my-coins.component';

describe('MyCoinsComponent', () => {
  let component: MyCoinsComponent;
  let fixture: ComponentFixture<MyCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});