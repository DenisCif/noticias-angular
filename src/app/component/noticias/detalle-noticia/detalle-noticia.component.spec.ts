import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNoticiaComponent } from './detalle-noticia.component';

describe('DetalleNoticiaComponent', () => {
  let component: DetalleNoticiaComponent;
  let fixture: ComponentFixture<DetalleNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleNoticiaComponent]
    });
    fixture = TestBed.createComponent(DetalleNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
