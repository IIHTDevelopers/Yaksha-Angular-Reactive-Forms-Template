import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';  // Import the form component
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import FormsModule to support template-driven forms

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, FormComponent],  // Declare the AppComponent and FormComponent
            imports: [ReactiveFormsModule, FormsModule],  // Import FormsModule for template-driven forms
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should create the app component', () => {
            expect(component).toBeTruthy();
        });

        it('should display the correct title', () => {
            const compiled = fixture.nativeElement;
            expect(compiled.querySelector('h1').textContent).toContain('Reactive Angular Form');
        });

        it('should render the form component', () => {
            const compiled = fixture.nativeElement;
            const formElement = compiled.querySelector('app-form');
            expect(formElement).toBeTruthy();  // Ensure the form component is rendered inside the app component
        });

        it('should have a title element', () => {
            const compiled = fixture.nativeElement;
            const titleElement = compiled.querySelector('h1');
            expect(titleElement).toBeTruthy();  // Ensure the <h1> element is rendered
            expect(titleElement.textContent).toBe('Reactive Angular Form');  // Ensure the correct title is displayed
        });
    });
});
