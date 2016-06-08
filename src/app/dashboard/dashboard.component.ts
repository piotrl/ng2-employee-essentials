import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee/employee.service'
import {DashboardService} from './dashboard.service'
import {Employee} from '../shared/Employee'
import {City} from '../shared/City'
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
  cities: City[];

  constructor(private employeeService: EmployeeService,
              private dashboardService: DashboardService,
              private router: Router) {
  }

  ngOnInit() {
    Promise.all([
      this.employeeService.getEmployees().toPromise(),
      this.dashboardService.getCities()
    ]).then((data: any[]) => {
      console.log(data);
      const employees = data[0];
      const cities = data[1];

      this.cities = cities.map(c => {
        c.employees = employees.filter(e => {
          return c.id === e.city
        });
        return c;
      });
    });
  }

  bestEmployees(city: City): Employee[] {
    return city.employees
      .sort((c1, c2) => c2.salary - c1.salary)
      .slice(0, 3);
  }

  avgSalary(city: City): number {
    if (!city.employees.length) {
      return 0;
    }
    let sum = 0;
    city.employees.forEach(e => sum += e.salary);

    return sum / city.employees.length;
  }

  avgAge(city: City): number {
    if (!city.employees.length) {
      return 0;
    }
    let sum = 0;
    city.employees.forEach(e => sum += e.age);

    return sum / city.employees.length;
  }
}
