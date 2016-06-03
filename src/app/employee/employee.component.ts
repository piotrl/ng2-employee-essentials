import {Component, OnInit} from "@angular/core";
import {Control} from "@angular/common";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {Employee} from "./Employee";
import {EmployeeService} from "./employee.service";
import {EmployeeDetailComponent} from "./detail/employee-detail.component";
import "rxjs/Rx";
import "rxjs/add/operator/share";

@Component({
    selector: 'employees-list',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css'],
    directives: [EmployeeDetailComponent]
})
export class EmployeesComponent implements OnInit {
    term = new Control();
    employees$:Observable<Employee[]>;
    selectedEmployee:Employee;
    addingEmployee = false;
    error:any;

    constructor(private employeeService:EmployeeService,
                private router: Router) {
    }

    ngOnInit() {
        this.employees$ = this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.employeeService.search(term));
    }

    addEmployee() {
        this.addingEmployee = true;
        this.selectedEmployee = null;
        this.router.navigateByUrl( `/employee/0`);
    }

    close(savedEmployee:Employee) {
        this.addingEmployee = false;
        if (savedEmployee) {
            this.getEmployees();
        }
    }

    getEmployees() {
        this.employees$ = this.employeeService
            .getEmployees();
    }

    delete(employee:Employee, event:any) {
        event.stopPropagation();
        this.employeeService
            .delete(employee)
            .then(res => {
                this.getEmployees();
                if (this.selectedEmployee === employee) {
                    this.selectedEmployee = null;
                }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    onSelect(employee:Employee) {
        this.selectedEmployee = employee;
        this.addingEmployee = false;
    }

    gotoDetail(employee: Employee) {
        this.router.navigateByUrl( `/employee/${employee.id}`);
    }
}
