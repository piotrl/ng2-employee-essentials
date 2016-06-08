import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router";
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';

import {EmployeeService} from "./employee/employee.service";
import {EmployeesComponent} from "./employee/employee.component";
import {EmployeeDetailComponent} from "./employee/detail/employee-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {DashboardService} from "./dashboard/dashboard.service";

@Routes([
    {path: '/', component: DashboardComponent},
    {path: '/employees', component: EmployeesComponent},
    {path: '/employee/:id', component: EmployeeDetailComponent}
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        AlertComponent, DATEPICKER_DIRECTIVES
    ],
    providers: [ROUTER_PROVIDERS, EmployeeService, DashboardService]
})
export class AppComponent implements OnInit {
    title = 'Employee Essentials';

    constructor(private router: Router,
                private viewContainerRef: ViewContainerRef) {}

    ngOnInit() {
        // this.router.navigate(['/']);
    }
}