import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDataEditorComponent } from './cat-data-editor.component';

describe('CatDataEditorComponent', () => {
  let component: CatDataEditorComponent;
  let fixture: ComponentFixture<CatDataEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatDataEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDataEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
