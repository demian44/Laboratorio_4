import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorBuscadorComponent } from './mostrador-buscador.component';

describe('MostradorBuscadorComponent', () => {
  let component: MostradorBuscadorComponent;
  let fixture: ComponentFixture<MostradorBuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostradorBuscadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostradorBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
