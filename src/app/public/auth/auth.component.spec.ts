import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports:[
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be verify value change in the form control user', () => {
    const getUserFormControl = component.formLogin;
    getUserFormControl.controls['user'].setValue("user form");
    expect(getUserFormControl.controls['user'].value).toBe("user form");
  })

  it('should be verify value change in the form control password', () => {
    const getUserFormControl = component.formLogin;
    getUserFormControl.controls['password'].setValue("password form");
    expect(getUserFormControl.controls['password'].value).toBe("password form");
  })
});
