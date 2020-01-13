import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCatsComponent } from './explore-cats.component';

describe('ExploreCatsComponent', () => {
  let component: ExploreCatsComponent;
  let fixture: ComponentFixture<ExploreCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
