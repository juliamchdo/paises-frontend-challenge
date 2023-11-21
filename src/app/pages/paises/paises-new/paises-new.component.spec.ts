import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesNewComponent } from './paises-new.component';

describe('PaisesNewComponent', () => {
  let component: PaisesNewComponent;
  let fixture: ComponentFixture<PaisesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
