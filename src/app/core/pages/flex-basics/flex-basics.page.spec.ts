import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FlexBasicsPage } from "./flex-basics.component";

describe("FlexBasicsPage", () => {
  let component: FlexBasicsPage;
  let fixture: ComponentFixture<FlexBasicsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexBasicsPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FlexBasicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
