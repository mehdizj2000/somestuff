import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommDataComponent } from './comm-data.component';

describe('CommDataComponent', () => {
  let component: CommDataComponent;
  let fixture: ComponentFixture<CommDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
