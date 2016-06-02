import {Component}       from '@angular/core';
import {EmployeeService}     from './employee/employee.service';
import {EmployeesComponent} from './employee/employee.component';
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <employees-list></employees-list>
  `,
    directives: [EmployeesComponent],
    providers: [EmployeeService]
})
export class AppComponent {
    title = 'Employee Essentials';
}