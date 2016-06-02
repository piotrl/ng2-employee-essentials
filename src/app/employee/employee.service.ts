import { Injectable } from '@angular/core';
import { EMPLOYEES } from './default-employees';

@Injectable()
export class EmployeeService {
    getEmployees() {
        return Promise.resolve(EMPLOYEES);
    }

    getEmployee(id: number) {
        return this.getEmployees().then(
            employee => employee.filter(employee => employee.id === id)[0]
        );
    }
}