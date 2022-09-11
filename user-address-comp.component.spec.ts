import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressCompComponent } from './user-address-comp.component';

describe('UserAddressCompComponent', () => {
  let component: UserAddressCompComponent;
  let fixture: ComponentFixture<UserAddressCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddressCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddressCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
