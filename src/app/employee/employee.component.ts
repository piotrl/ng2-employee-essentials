import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {Employee} from "./Employee";
import {EmployeeService} from "./employee.service";
import {EmployeeDetailComponent} from './detail/employee-detail.component'


@Component({
    selector: 'employee-essentials-app',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css'],
    directives: [EmployeeDetailComponent],
    providers: [EmployeeService]
})
export class EmployeeEssentialsAppComponent implements OnInit {

    title = 'ng2-employee-essentials works!';
    employees:Employee[];
    selectedEmployee:Employee;

    constructor(private employeeService:EmployeeService) {
    }

    ngOnInit() {
        this.employeeService.getEmployees()
            .then((employees) => {
                this.employees = employees;
            });
    }

    onSelect(employee:Employee) {
        this.selectedEmployee = employee;
    }
}
