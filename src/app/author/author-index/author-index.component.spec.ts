import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorIndexComponent } from './author-index.component';

describe('AuthorIndexComponent', () => {
  let component: AuthorIndexComponent;
  let fixture: ComponentFixture<AuthorIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
