import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImnobiliariaCardComponent } from './imnobiliaria-card.component';

describe('ImnobiliariaCardComponent', () => {
  let component: ImnobiliariaCardComponent;
  let fixture: ComponentFixture<ImnobiliariaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImnobiliariaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImnobiliariaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
