import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalKabinetComponent } from './personal-kabinet.component';

describe('PersonalKabinetComponent', () => {
  let component: PersonalKabinetComponent;
  let fixture: ComponentFixture<PersonalKabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalKabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalKabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
