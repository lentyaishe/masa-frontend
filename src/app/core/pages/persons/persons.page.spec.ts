import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PersonsPage } from "./persons.page";

describe("PersonsPage", () => {
  let component: PersonsPage;
  let fixture: ComponentFixture<PersonsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
