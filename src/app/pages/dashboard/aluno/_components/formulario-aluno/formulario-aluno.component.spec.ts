import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAlunoComponent } from './formulario-aluno.component';

describe('FormularioAlunoComponent', () => {
  let component: FormularioAlunoComponent;
  let fixture: ComponentFixture<FormularioAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
