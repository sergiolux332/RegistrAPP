import { Component } from '@angular/core';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage {
  // Definir el objeto con indexación flexible
  expandedMonths: { [key: string]: boolean } = {
    agosto: false,
    septiembre: false
  };

  // Asistencias del mes de agosto
  asistenciasAgosto = [
    { asignatura: 'Estadistica descriptiva', fecha: '2024-08-10', presente: true },
    { asignatura: 'programacion de aplicacion movil', fecha: '2024-08-15', presente: false },
    { asignatura: 'Arquitectura', fecha: '2024-08-20', presente: true },
    { asignatura: 'Calidad de software', fecha: '2024-08-25', presente: false },
  ];

  // Asistencias del mes de septiembre
  asistenciasSeptiembre = [
    { asignatura: 'Estadistica descriptiva', fecha: '2024-09-15', presente: true },
    { asignatura: 'Programacion de aplicacion movil', fecha: '2024-09-14', presente: false },
    { asignatura: 'Arquitectura', fecha: '2024-09-13', presente: true },
    { asignatura: 'Calidad de software', fecha: '2024-09-12', presente: false },
  ];

  constructor() {}

  // Método para alternar la expansión de cada mes
  toggleMonth(month: string) {
    this.expandedMonths[month] = !this.expandedMonths[month];
  }
}
