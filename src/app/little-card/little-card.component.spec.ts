import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleCardComponent } from './little-card.component';

describe('LittleCardComponent', () => {
  let component: LittleCardComponent;
  let fixture: ComponentFixture<LittleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LittleCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LittleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
