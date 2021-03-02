import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class UsernameValidators {

    static connotContainSpace(control: AbstractControl): ValidationErrors | null {

        if ((control.value as string).indexOf(' ') > 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

        return new Promise<ValidationErrors>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'meyti') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000);

        });



    }

}