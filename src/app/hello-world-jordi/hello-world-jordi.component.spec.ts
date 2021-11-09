import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldJordiComponent } from './hello-world-jordi.component';

describe('HelloWorldJordiComponent', () => {
  let component: HelloWorldJordiComponent;
  let fixture: ComponentFixture<HelloWorldJordiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldJordiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldJordiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
