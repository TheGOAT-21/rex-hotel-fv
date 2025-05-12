import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingHallComponent } from './wedding-hall.component';

describe('WeddingHallComponent', () => {
  let component: WeddingHallComponent;
  let fixture: ComponentFixture<WeddingHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingHallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
