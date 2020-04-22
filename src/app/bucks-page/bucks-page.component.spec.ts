import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucksPageComponent } from './bucks-page.component';

describe('BucksPageComponent', () => {
  let component: BucksPageComponent;
  let fixture: ComponentFixture<BucksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
