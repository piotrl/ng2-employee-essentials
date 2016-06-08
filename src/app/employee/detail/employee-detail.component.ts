import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouteSegment, OnActivate} from "@angular/router";

import {Employee} from '../../shared/Employee';
import {EmployeeService} from "../employee.service";
import {DashboardService} from "../../dashboard/dashboard.service";
import {City} from "../../shared/City";

@Component({
  selector: 'employee-detail',
  styleUrls: ['app/employee/detail/employee-detail.component.css'],
  templateUrl: 'app/employee/detail/employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnActivate {
  @Input()
  @Output() close = new EventEmitter();

  employee: Employee;
  error: any;
  cities: City[];

  constructor(private employeeService: EmployeeService,
              private dashboardService: DashboardService) {
    dashboardService.getCities()
      .then(
        cities => this.cities = cities
      );
  }

  routerOnActivate(curr: RouteSegment): void {
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

  goBack(savedEmployee: Employee = null) {
    this.close.emit(savedEmployee);
    window.history.back();
  }

}