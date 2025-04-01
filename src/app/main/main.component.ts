import { Component } from '@angular/core';
import { TableEmployeesComponent } from './table-employees/table-employees.component';
import { GetAllJobs } from '../interfaces/getAllJobs';
import { NewEmployeeModalComponent } from './Modal/new-employee-modal/new-employee-modal.component';
import { EditEmployeeModalComponent } from './Modal/edit-employee-modal/edit-employee-modal.component';
import { DeleteEmployeeModalComponent } from './Modal/delete-employee-modal/delete-employee-modal.component';

@Component({
  selector: 'app-main',
  imports: [TableEmployeesComponent, NewEmployeeModalComponent, EditEmployeeModalComponent, DeleteEmployeeModalComponent],
  templateUrl: "./main.component.html",
  styleUrl: './main.component.scss'
})
export class MainComponent {
  
}
