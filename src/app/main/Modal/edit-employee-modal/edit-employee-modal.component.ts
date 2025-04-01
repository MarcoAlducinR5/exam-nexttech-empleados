import { Component, inject } from '@angular/core';
import { GetAllJobs } from '../../../interfaces/getAllJobs';
import { GetAllJobsService } from '../../../services/getAllJobs/getalljobs.service';

@Component({
  selector: 'app-edit-employee-modal',
  imports: [],
  templateUrl: "./edit-employee-modal.component.html",
  styleUrl: './edit-employee-modal.component.scss'
})
export class EditEmployeeModalComponent {
  getAllJobs: GetAllJobs[] = [];
  listAllJobs: GetAllJobsService = inject(GetAllJobsService);

  constructor(){
    this.getAllJobs = this.listAllJobs.getAllJobs();
  }
}