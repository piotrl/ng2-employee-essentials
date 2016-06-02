import {Component, OnInit} from "@angular/core";
import {Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router";

import {EmployeeService} from "./employee/employee.service";
import {EmployeesComponent} from "./employee/employee.component";
import {EmployeeDetailComponent} from "./employee/detail/employee-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

@Routes([
    {path: '/', component: DashboardComponent},
    {path: '/employees', component: EmployeesComponent},
    {path: '/employee/:id', component: EmployeeDetailComponent}
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, EmployeeService]
})
export class AppComponent implements OnInit {
    title = 'Employee Essentials';

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['/']);
    }
}