import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasPesquisaComponent } from './pessoas-pesquisa.component';

describe('PessoasPesquisaComponent', () => {
  let component: PessoasPesquisaComponent;
  let fixture: ComponentFixture<PessoasPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasPesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
