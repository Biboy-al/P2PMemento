import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTopNavComponent } from './with-top-nav.component';

describe('WithTopNavComponent', () => {
  let component: WithTopNavComponent;
  let fixture: ComponentFixture<WithTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithTopNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
