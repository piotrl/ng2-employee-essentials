import {Employee} from './Employee';

export class City {
  id: string;
  name: string;
  employees: Employee[];

  // stats
  employeesAmount: number;
  avgSalary: number;
}