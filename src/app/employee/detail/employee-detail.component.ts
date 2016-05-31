import {Component, Input} from '@angular/core';
import {Employee} from '../Employee';


@Component({
    selector: 'employee-detail',
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
export class EmployeeDetailComponent {
    @Input()
    employee:Employee;
}