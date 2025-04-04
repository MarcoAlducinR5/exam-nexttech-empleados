import { Injectable } from '@angular/core';
import { GetAllJobs } from '../../interfaces/getAllJobs';

@Injectable({
  providedIn: 'root'
})
export class GetAllJobsService {
  protected allJobs: GetAllJobs[] = [
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

  constructor() { }

  getAllJobs(): GetAllJobs[]{
      return this.allJobs;
    }
}
