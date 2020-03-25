import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliComponent } from './peli.component';

describe('PeliComponent', () => {
  let component: PeliComponent;
  let fixture: ComponentFixture<PeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
