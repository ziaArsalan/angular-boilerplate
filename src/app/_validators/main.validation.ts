import { FormGroup, ValidatorFn } from '@angular/forms';

export function  createValidatorFromSchema(schema:any): ValidatorFn {
    const validator: any = async (group: FormGroup) => {
      // This is where the validation on the values of
      // the form group is run.
      // abortEarly check false not throw error at once but return complete detail for the object values
      const result = schema.options({abortEarly : false}).validate(group.value)
  
      if (result.error) {
        const errorObj = result.error.details.reduce((acc:any, current:any) => {
          const key = current.path.join('.');
          acc[key] = current.message;
          return acc;
        }, {})
  
        // Set error value on each control
        for (const key in errorObj) {
          const control = group.get(key);
          if (control && control.dirty) {
            control.setErrors({ [key]: errorObj[key] });
          }
        }

        // Return the error object so that we can access
        // the form’s errors via `form.errors`. 
        return errorObj;
      } else {
        return null;
      }
    };
  
    return validator;
}