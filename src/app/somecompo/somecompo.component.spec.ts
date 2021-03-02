import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomecompoComponent } from './somecompo.component';

describe('SomecompoComponent', () => {
  let component: SomecompoComponent;
  let fixture: ComponentFixture<SomecompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomecompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomecompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
