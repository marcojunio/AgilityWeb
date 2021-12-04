import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AuthComponent } from 'src/app/public/auth/auth.component';

describe('AutofocusDirective', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let inputEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports:[
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  
    inputEl = fixture.debugElement.query(By.css('.user'));
  });

  it('should create an instance', () => {
    expect(inputEl).toBeTruthy();
  });

  it('Testing focus in input user',() => {
    inputEl.triggerEventHandler('focus', {});
    fixture.detectChanges();
  })
});

export class MockElementRef extends ElementRef {}