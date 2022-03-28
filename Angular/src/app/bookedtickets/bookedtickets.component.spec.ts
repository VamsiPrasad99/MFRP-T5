import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedticketsComponent } from './bookedtickets.component';

describe('BookedticketsComponent', () => {
  let component: BookedticketsComponent;
  let fixture: ComponentFixture<BookedticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedticketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
