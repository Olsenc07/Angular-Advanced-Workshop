import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableFilterDropdownComponent } from './reusable-filter-dropdown.component';

describe('ReusableFilterDropdownComponent', () => {
  let component: ReusableFilterDropdownComponent;
  let fixture: ComponentFixture<ReusableFilterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableFilterDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableFilterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
