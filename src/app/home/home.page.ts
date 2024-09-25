import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  correo: string = '';  
  clave: string = '';   

  private readonly CORRECTO_CORREO: string = 'hola123';
  private readonly CORRECTO_CLAVE: string = 'hola123';

  constructor(private router: Router) {}

  menu() {
  
    if (this.correo.trim() !== '' && this.clave.trim() !== '') {
      
      if (this.correo === this.CORRECTO_CORREO && this.clave === this.CORRECTO_CLAVE) {
      
        this.router.navigate(['/menu']);
      } else {
       
        alert('Correo o clave incorrectos');
      }
    } else {
 
      alert('Por favor, ingresa un correo y una clave');
    }
  }
  recuperarCorreo() {
    alert('Funcionalidad para recuperar el correo no implementada.');
    // Aquí podrías agregar la lógica para la recuperación del correo
  }
  
}
