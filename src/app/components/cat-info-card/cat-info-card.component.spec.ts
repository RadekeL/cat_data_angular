import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatInfoCardComponent } from './cat-info-card.component';

describe('CatInfoCardComponent', () => {
  let component: CatInfoCardComponent;
  let fixture: ComponentFixture<CatInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
