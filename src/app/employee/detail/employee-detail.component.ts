import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouteSegment, OnActivate} from "@angular/router";

import {Employee} from '../Employee';
import {EmployeeService} from "../employee.service";

@Component({
    selector: 'employee-detail',
    styleUrls: ['app/employee/detail/employee-detail.component.css'],
    template: `
        <div *ngIf="employee">

            <form #employeForm="ngForm">
            <h2 *ngIf="employee.name">{{ employee.name }} details!</h2>
            <div *ngIf="employee.id"><label>id: </label>{{employee.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="employee.name" placeholder="name" ngControl="name" #name="ngForm" required minlength="3">
            </div>
            <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
                Name has to be at least 3 characters
            </div>
            <div>
                <label>age: </label>
                <input [(ngModel)]="employee.age" type="number" placeholder="age" ngControl="age" #age="ngForm" required min="18">
            </div>
            <div [hidden]="age.valid || age.pristine" class="alert alert-danger">
                Our employees has to be at least 18 
            </div>

            <button (click)="goBack()">Back</button>
            <button (click)="save()" [disabled]="!employeForm.form.valid">Save</button>
            </form>

        </div>
    `
})
export class EmployeeDetailComponent implements OnActivate {
    @Input()
    @Output() close = new EventEmitter();

    employee:Employee;
    error:any;

    constructor(private employeeService:EmployeeService) {
    }

    routerOnActivate(curr:RouteSegment):void {
        if (+curr.getParam('id') !== 0) {
            let id = +curr.getParam('id');
            this.employeeService.getEmployee(id)
                .then(employee => this.employee = employee);
        } else {
            this.employee = new Employee();
            this.employee.name = '';
            this.employee.age = 0;
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
        window.history.back();
    }

}