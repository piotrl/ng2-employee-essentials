import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee/employee.service'
import {Employee} from '../employee/Employee'
import {Router} from "@angular/router";



@Component({
    selector: 'my-dashboard',
    styleUrls: ['app/dashboard/dashboard.component.css'],
    templateUrl: 'app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    topEmployees:Employee[];

    constructor(private employeeService:EmployeeService,
                private router: Router) {
    }

    ngOnInit() {
        this.employeeService.getEmployees()
            .then(employees => this.topEmployees = employees.slice(1, 5));
    }

    gotoDetail(employee: Employee) {
        this.router.navigateByUrl( `/employee/${employee.id}`);
    }

}
