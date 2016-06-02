import { Injectable } from '@angular/core';
import { EMPLOYEES } from './default-employees';

@Injectable()
export class EmployeeService {
    getEmployees() {
        return Promise.resolve(EMPLOYEES);
    }
}