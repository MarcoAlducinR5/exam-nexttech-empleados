import { Component, inject } from '@angular/core';
import { EmployeesList } from '../../interfaces/employees-list';
import { EmployeesService } from '../../services/employees/employees.service';

@Component({
  selector: 'app-table-employees',
  imports: [],
  templateUrl: "./table-employees.component.html",
  styleUrl: './table-employees.component.scss'
})
export class TableEmployeesComponent {
  
    employees: EmployeesList[] = [];
    listEmloyees: EmployeesService = inject(EmployeesService);

    editarRegistro(id: Number){
      console.log(this.listEmloyees.getEmployeeId(id))
      // return this.listEmloyees.getEmployeeId(id);
    }

    constructor(){
      this.employees = this.listEmloyees.getAllEmployees();
    }
  }
