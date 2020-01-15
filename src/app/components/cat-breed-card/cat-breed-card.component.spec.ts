import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CatBreedCardComponent } from "./cat-breed-card.component";

describe("CatBreedCardComponent", () => {
  let component: CatBreedCardComponent;
  let fixture: ComponentFixture<CatBreedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CatBreedCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatBreedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
