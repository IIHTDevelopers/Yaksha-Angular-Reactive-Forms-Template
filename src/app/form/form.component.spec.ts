import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';  // Import ReactiveFormsModule for Reactive Forms
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let fixture: ComponentFixture<FormComponent>;
  let component: FormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule],  // Import ReactiveFormsModule for Reactive Forms
    });

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();  // Ensure the form controls are initialized
  });

  describe('boundary', () => {
    it('should have a submit button with correct attributes', () => {
      const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));

      // Check if the button exists and is correctly configured
      expect(submitButton).toBeTruthy();
      expect(submitButton.attributes['type']).toBe('submit');
      expect(submitButton.nativeElement.textContent.trim()).toBe('Submit');
    });

    it('should disable submit button when form is invalid', () => {
      const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;

      component.userForm.get('name')?.setValue('');
      fixture.detectChanges();

      expect(submitButton.disabled).toBe(true);  // Submit button should be disabled when form is invalid
    });

    it('should enable submit button when form is valid', () => {
      const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;

      component.userForm.setValue({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'validpassword',
      });
      fixture.detectChanges();

      expect(submitButton.disabled).toBe(false);  // Submit button should be enabled when form is valid
    });

    it('should check the form status', () => {
      // Initially the form is invalid (as no values are set)
      expect(component.userForm.invalid).toBe(true);

      // Set valid values for all fields
      component.userForm.setValue({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'validpassword',
      });

      // Check if the form is valid after setting valid values
      expect(component.userForm.valid).toBe(true);
    });
  });
});
