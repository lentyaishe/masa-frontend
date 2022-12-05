import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOhFourPageComponent } from './404.page';

describe('FourOhFourPageComponent', () => {
  let component: FourOhFourPageComponent;
  let fixture: ComponentFixture<FourOhFourPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourOhFourPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourOhFourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
