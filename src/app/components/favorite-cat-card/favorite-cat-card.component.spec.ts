import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCatCardComponent } from './favorite-cat-card.component';

describe('FavoriteCatCardComponent', () => {
  let component: FavoriteCatCardComponent;
  let fixture: ComponentFixture<FavoriteCatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteCatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
