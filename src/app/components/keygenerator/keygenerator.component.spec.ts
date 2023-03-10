import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KeygeneratorComponent } from './keygenerator.component';

describe('KeygeneratorComponent', () => {
  let component: KeygeneratorComponent;
  let fixture: ComponentFixture<KeygeneratorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KeygeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeygeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
