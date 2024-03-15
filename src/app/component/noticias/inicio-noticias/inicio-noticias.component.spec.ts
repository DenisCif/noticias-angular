import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioNoticiasComponent } from './inicio-noticias.component';

describe('InicioNoticiasComponent', () => {
  let component: InicioNoticiasComponent;
  let fixture: ComponentFixture<InicioNoticiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioNoticiasComponent]
    });
    fixture = TestBed.createComponent(InicioNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
