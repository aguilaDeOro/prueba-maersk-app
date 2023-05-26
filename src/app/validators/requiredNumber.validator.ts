import { ValidatorFn, AbstractControl } from "@angular/forms";

export function requiredNumberValidator(message: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: number = control.value == null? '': control.value;
      const isNumeric = /^[0-9]+$/.test(value.toString());
      const isZero = value === 0;
      const isNull = value == null;
      const isEmpty = /\s/g.test(value.toString());
      const isLengthZero = value.toString().trim().length == 0;
      const required =  (control.dirty || control.touched) && isNull || isEmpty || isLengthZero || isZero || !isNumeric;
      return required
        ? {
          required: {
              message: message,
              isNull,
              isEmpty,
              isLengthZero,
              isZero,    
              isNumeric
            }
          }
        : null;
    };
  }