import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdashComponent } from './shopdash.component';

describe('ShopdashComponent', () => {
  let component: ShopdashComponent;
  let fixture: ComponentFixture<ShopdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
