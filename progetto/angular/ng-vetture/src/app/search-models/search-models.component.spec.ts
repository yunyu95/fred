import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchModelsComponent } from './search-models.component';

describe('SearchModelsComponent', () => {
  let component: SearchModelsComponent;
  let fixture: ComponentFixture<SearchModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
