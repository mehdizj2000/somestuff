import { ValidationErrors, FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
export class PasswordValidator {


    static isPasswordUsedBefore(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (control.value === '1234')
                    resolve(null);
                else
                    resolve({ isPasswordUsedBefore: true });
            }, 2000);

        })

    }

    static confirmPasswordMatched(control: AbstractControl): ValidationErrors | null {

        let newPass = control.get('newPass').value;
        let confrimPass = control.get('confirmPass').value;
        if (newPass === confrimPass)
            return null;
        else
            return { confirmPasswordMatched: true };
    }


}