import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSearchFormComponent } from './cat-search-form.component';

describe('CatSearchFormComponent', () => {
  let component: CatSearchFormComponent;
  let fixture: ComponentFixture<CatSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
