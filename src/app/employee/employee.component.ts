import {Component} from '@angular/core';
import {Employee} from "./Employee";

const EMPLOYEES:Employee[] = [
    {"id": 11, "name": "Mr. Nice"},
    {"id": 12, "name": "Narco"},
    {"id": 13, "name": "Bombasto"},
    {"id": 14, "name": "Celeritas"},
    {"id": 15, "name": "Magneta"},
    {"id": 16, "name": "RubberMan"},
    {"id": 17, "name": "Dynama"},
    {"id": 18, "name": "Dr IQ"},
    {"id": 19, "name": "Magma"},
    {"id": 20, "name": "Tornado"}
];

@Component({
    moduleId: module.id,
    selector: 'employee-essentials-app',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.css']
})
export class EmployeeEssentialsAppComponent {
    title = 'ng2-employee-essentials works!';

    employees = EMPLOYEES;
    selectedEmployee:Employee;

    onSelect(employee:Employee) {
        this.selectedEmployee = employee;
    }
}
