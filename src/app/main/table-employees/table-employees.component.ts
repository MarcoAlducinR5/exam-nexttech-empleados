import { Component, Input } from '@angular/core';
import { EmployeesList } from '../../interfaces/employees-list';

@Component({
  selector: 'app-table-employees',
  imports: [],
  templateUrl: "./table-employees.component.html",
  styleUrl: './table-employees.component.scss'
})
export class TableEmployeesComponent {
  
    employees: EmployeesList[] =[
      {
        "id": 1,
        "nombre": "Marco Antonio Alducin Garcia",
        "puesto": "Developer",
        "ingreso": "2025-03-31",
        "salario": "10000",
        "edad": 33 
      },
      {
        "id": 2,
        "nombre": "Juliana Garcia Millan",
        "puesto": "Executive",
        "ingreso": "2023-12-01",
        "salario": "30000",
        "edad": 50 
      }
    ];
}
