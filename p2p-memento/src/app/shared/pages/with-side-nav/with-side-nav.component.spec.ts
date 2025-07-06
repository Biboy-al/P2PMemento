import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithSideNavComponent } from './with-side-nav.component';

describe('WithSideNavComponent', () => {
  let component: WithSideNavComponent;
  let fixture: ComponentFixture<WithSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithSideNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
