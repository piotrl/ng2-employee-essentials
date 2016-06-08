import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee/employee.service'
import {Employee} from '../employee/Employee'
import {Router} from "@angular/router";

import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';


@Component({
    selector: 'my-dashboard',
    styleUrls: ['app/dashboard/dashboard.component.css'],
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives: [
        MD_SIDENAV_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
    ]
})
export class DashboardComponent implements OnInit {
    topEmployees:Employee[];

    constructor(private employeeService:EmployeeService,
                private router: Router) {
    }

    ngOnInit() {
        this.employeeService.getEmployees()
            .toPromise()
            .then(employees => this.topEmployees = employees.slice(1, 5));
    }

    gotoDetail(employee: Employee) {
        this.router.navigateByUrl( `/employee/${employee.id}`);
    }

}
