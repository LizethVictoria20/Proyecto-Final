import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoncamilaComponent } from './botoncamila.component';

describe('BotoncamilaComponent', () => {
  let component: BotoncamilaComponent;
  let fixture: ComponentFixture<BotoncamilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoncamilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoncamilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
