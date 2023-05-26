import { ValidatorFn, AbstractControl } from "@angular/forms";

export function requiredValidator(message: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value;
      const isNull = value == null;
      const isEmpty = /\s/g.test(value);
      const isLengthZero = value.trim().length == 0;
      const required =  (control.dirty || control.touched) && isNull || isEmpty || isLengthZero;
      return required
        ? {
          required: {
              message: message,
              isNull,
              isEmpty,
              isLengthZero
            }
          }
        : null;
    };
  }