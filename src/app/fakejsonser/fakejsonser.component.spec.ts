import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakejsonserComponent } from './fakejsonser.component';

describe('FakejsonserComponent', () => {
  let component: FakejsonserComponent;
  let fixture: ComponentFixture<FakejsonserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakejsonserComponent]
    });
    fixture = TestBed.createComponent(FakejsonserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
