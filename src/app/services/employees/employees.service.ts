import { Injectable } from '@angular/core';
import { EmployeesList } from '../../interfaces/employees-list';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  protected listEmployes: EmployeesList[] = [
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

  constructor() { }

  getAllEmployees(): EmployeesList[]{
    return this.listEmployes;
  }

  getEmployeeId(id: Number): EmployeesList | undefined{
    return this.listEmployes.find(employeeList => employeeList.id === id);
  }

}
