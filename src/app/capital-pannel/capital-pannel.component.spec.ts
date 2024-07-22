import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalPannelComponent } from './capital-pannel.component';

describe('CapitalPannelComponent', () => {
  let component: CapitalPannelComponent;
  let fixture: ComponentFixture<CapitalPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalPannelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapitalPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
