import { Component, OnInit } from '@angular/core';
import { Producto } from './models/producto.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { requiredValidator } from './validators/required.validator';
import { requiredNumberValidator } from './validators/requiredNumber.validator'; 
import { messageValidaEmpleados } from './validators/constantes.validaciones';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Formulario - Validaciones';

  frmEmpleado!: FormGroup;  
  productos: Producto[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.frmEmpleado = this.formBuilder.group({
      nombres: ['',[requiredValidator(messageValidaEmpleados.requiredNombres)]],
      apellidos: ['',[requiredValidator(messageValidaEmpleados.requiredApellidos)]],   
      numeroHijos: ['',[requiredNumberValidator(messageValidaEmpleados.requiredNumeroHijos)]],   
      sede: ['',[requiredValidator(messageValidaEmpleados.requiredSede)]],       
      experiencia: [''],               
    });
    
  }

  send(): any {
    console.log(this.frmEmpleado.value);
  }
}
