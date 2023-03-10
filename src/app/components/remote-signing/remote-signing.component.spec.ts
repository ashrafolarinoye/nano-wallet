import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RemoteSigningComponent } from './remote-signing.component';

describe('RemoteSigningComponent', () => {
  let component: RemoteSigningComponent;
  let fixture: ComponentFixture<RemoteSigningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteSigningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteSigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
