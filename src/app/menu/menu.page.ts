import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(private navController: NavController) {}

  Asignaturas() {
    this.navController.navigateForward('/asignaturas');  // Navega a la página de asignaturas
  }

  asistencia() {
    this.navController.navigateForward('/asistencias');  // Navega a la página de asistencias
  }

  registro() {
    this.navController.navigateForward('/registro');  // Navega a la página de registro de asistencia
  }

  cambiar() {
    this.navController.navigateForward('/cambiar');  // Navega a la página de cambiar clave
  }
}