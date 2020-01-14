import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FavoriteCatsComponent } from "./favorite-cats.component";

describe("FavoriteCatsComponent", () => {
  let component: FavoriteCatsComponent;
  let fixture: ComponentFixture<FavoriteCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteCatsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
