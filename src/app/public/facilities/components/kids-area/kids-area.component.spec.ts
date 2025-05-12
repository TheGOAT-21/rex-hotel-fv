import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsAreaComponent } from './kids-area.component';

describe('KidsAreaComponent', () => {
  let component: KidsAreaComponent;
  let fixture: ComponentFixture<KidsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
