import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeraproducaoComponent } from './geraproducao.component';

describe('GeraproducaoComponent', () => {
  let component: GeraproducaoComponent;
  let fixture: ComponentFixture<GeraproducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeraproducaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeraproducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
