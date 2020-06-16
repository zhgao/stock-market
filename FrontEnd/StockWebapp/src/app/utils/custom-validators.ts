import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password').value;
        const confirmedPassword: string = control.get('confirmedPassword').value;

        if (password !== confirmedPassword) {
            control.get('confirmedPassword').setErrors({ matched: true });
        }
    }

    static multiselectRequired(control: AbstractControl): ValidationErrors|null {
        const items: any[] = control.value;

        if (!Array.isArray(items) || items.length == 0) {
            return { required: true};
        }
        return null;
    }
}
