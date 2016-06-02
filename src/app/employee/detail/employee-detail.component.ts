import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
    @Output() close = new EventEmitter();

    employee:Employee;
    error: any;
    navigated = false; // true if navigated here

    constructor(private employeeService:EmployeeService) {
    }

    routerOnActivate(curr:RouteSegment):void {
        if (curr.getParam('id') !== null) {
            let id = +curr.getParam('id');
            this.navigated = true;
            this.employeeService.getEmployee(id)
                .then(employee => this.employee = employee);
        } else {
            this.navigated = false;
            this.employee = new Employee();
        }
    }

    save() {
        this.employeeService
            .save(this.employee)
            .then(employee => {
                this.employee = employee; // saved hero, w/ id if new
                this.goBack(employee);
            });
            // .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedEmployee:Employee = null) {
        this.close.emit(savedEmployee);
        if (this.navigated) {
            window.history.back();
        }
    }

}