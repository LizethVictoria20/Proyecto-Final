import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaSecundariaComponent } from './portada-secundaria.component';

describe('PortadaSecundariaComponent', () => {
  let component: PortadaSecundariaComponent;
  let fixture: ComponentFixture<PortadaSecundariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortadaSecundariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadaSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
