import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export class ValidadorCliente{
    static validarMontoAPagar(control: AbstractControl, montoAPagar:  number): ValidationErrors| null {
        let monto = parseFloat(control.value);
        if (monto < montoAPagar)
            return null;
        else
            return { montoOk: true }
      }
}
