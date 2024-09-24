import { Component } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  correo: string = 'hola123';  
  clave: string = 'hola123';   

  constructor(private router: Router) {}

  
  menu() {
    if (this.correo && this.clave) {
      
      this.router.navigate(['/menu']); 
    } else {
      
      alert('Por favor, ingresa un correo y una clave');
    }
  }
}
