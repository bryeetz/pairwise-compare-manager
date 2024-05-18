import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareSpaceComponent } from './compare-space.component';

describe('CompareSpaceComponent', () => {
  let component: CompareSpaceComponent;
  let fixture: ComponentFixture<CompareSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompareSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
