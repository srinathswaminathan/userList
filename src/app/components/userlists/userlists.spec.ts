import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userlists } from './userlists';

describe('Userlists', () => {
  let component: Userlists;
  let fixture: ComponentFixture<Userlists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userlists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userlists);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
