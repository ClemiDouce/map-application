import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownPannelComponent } from './town-pannel.component';

describe('TownPannelComponent', () => {
  let component: TownPannelComponent;
  let fixture: ComponentFixture<TownPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TownPannelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TownPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
