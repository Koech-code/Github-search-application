import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReopsitoriesComponent } from './repositories.component';

describe('RepositoriesComponent', () => {
  let component: ReopsitoriesComponent;
  let fixture: ComponentFixture<ReopsitoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReopsitoriesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReopsitoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
