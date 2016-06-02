import {Component, Input} from '@angular/core';
import {RouteSegment, OnActivate} from "@angular/router";

import {Employee} from '../Employee';
import {EmployeeService} from "../employee.service";

@Component({
    selector: 'employee-detail',
    styleUrls: ['app/employee/detail/employee-detail.component.css'],
    template: `
        <div *ngIf="employee">
            <h2>{{ employee.name }} details!</h2>
            <div><label>id: </label>{{employee.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="employee.name" placeholder="name">
            </div>
        </div>
    `
})
export class EmployeeDetailComponent implements OnActivate {
    @Input()
    employee:Employee;

    constructor(private employeeService:EmployeeService) {
    }

    routerOnActivate(curr:RouteSegment):void {
        let id = +curr.getParam('id');
        this.employeeService.getEmployee(id)
            .then(employee => this.employee = employee);
    }


}