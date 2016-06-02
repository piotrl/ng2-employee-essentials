import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Employee} from "./Employee";
import {EmployeeService} from "./employee.service";
import {EmployeeDetailComponent} from './detail/employee-detail.component'

@Component({
    selector: 'employees-list',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css'],
    directives: [EmployeeDetailComponent]
})
export class EmployeesComponent implements OnInit {
    employees:Employee[];
    selectedEmployee:Employee;
    addingEmployee = false;
    error:any;

    constructor(private employeeService:EmployeeService) {
    }

    addHero() {
        this.addingEmployee = true;
        this.selectedEmployee = null;
    }

    close(savedEmployee:Employee) {
        this.addingEmployee = false;
        if (savedEmployee) {
            this.getEmployees();
        }
    }
    getEmployees() {
        this.employeeService
            .getEmployees()
            .then(employees => this.employees = employees)
            .catch(error => this.error = error); // TODO: Display error message
    }

    delete(employee:Employee, event:any) {
        event.stopPropagation();
        this.employeeService
            .delete(employee)
            .then(res => {
                this.employees = this.employees.filter(h => h !== employee);
                if (this.selectedEmployee === employee) {
                    this.selectedEmployee = null;
                }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }


    ngOnInit() {
        this.employeeService.getEmployees()
            .then((employees) => {
                this.employees = employees;
            });
    }

    onSelect(employee:Employee) {
        this.selectedEmployee = employee;
        this.addingEmployee = false;
    }
}
