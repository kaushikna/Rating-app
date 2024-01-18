import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateingListComponent } from './rateing-list.component';

describe('RateingListComponent', () => {
  let component: RateingListComponent;
  let fixture: ComponentFixture<RateingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
