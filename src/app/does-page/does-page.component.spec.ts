import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoesPageComponent } from './does-page.component';

describe('DoesPageComponent', () => {
  let component: DoesPageComponent;
  let fixture: ComponentFixture<DoesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
