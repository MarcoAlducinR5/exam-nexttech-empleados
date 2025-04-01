import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exam-nexttech-empleados';
  getAllJobs = [
    {
      "puesto": "Developer",
      "empresa": "Fritsch LLC",
      "id": "1"
    },
    {
      "puesto": "Manager",
      "empresa": "Morar - Reinger",
      "id": "2"
    },
    {
      "puesto": "Planner",
      "empresa": "Jacobi, Romaguera and Lind",
      "id": "3"
    },
    {
      "puesto": "Planner",
      "empresa": "Flatley, Mann and Mills",
      "id": "4"
    },
    {
      "puesto": "Consultant",
      "empresa": "Donnelly, Sauer and D'Amore",
      "id": "5"
    },
    {
      "puesto": "Executive",
      "empresa": "Kub - Bernhard",
      "id": "6"
    },
    {
      "puesto": "Strategist",
      "empresa": "Rodriguez LLC",
      "id": "7"
    },
    {
      "puesto": "Representative",
      "empresa": "Erdman, Koss and Oberbrunner",
      "id": "8"
    },
    {
      "puesto": "Facilitator",
      "empresa": "Langworth, Toy and Parker",
      "id": "9"
    },
    {
      "puesto": "Officer",
      "empresa": "Hamill - Stroman",
      "id": "10"
    }
  ];
  employees=[
    {
      id: 1,
      nombre: "Marco Antonio Alducin Garcia",
      puesto: "Developer",
      ingreso: "2025-03-31",
      salario: "10000",
      edad: 33 
    },
    {
      id: 2,
      nombre: "Juliana Garcia Millan",
      puesto: "Executive",
      ingreso: "2023-12-01",
      salario: "30000",
      edad: 50 
    }
  ];
}
