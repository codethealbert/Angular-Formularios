import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  usuario = {
    nombrecompleto: {
      nombre: 'Alberto',
      apellido: 'Lopez'
    },
    correo: 'correo@gmail.com',
    // pasatiempos: ['Correr', 'Dormir', 'Comer']
  };

  constructor() {
    console.log(this.usuario);
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl('', [Validators.required, this.noHerrera])
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ])

    });
    // this.forma.setValue(this.usuario);
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
  }

  noHerrera( control: FormControl): {[s: string]: boolean} {
    if (control.value === 'herrera') {
      return {
        noherrera: true
      };
    }
    return null;
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);

    // this.forma.reset(this.usuario);
    /* this.forma.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''
    }); */
  }

}
