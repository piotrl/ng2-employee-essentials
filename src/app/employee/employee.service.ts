import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import "rxjs/add/operator/toPromise";

import {Employee} from "./Employee";


@Injectable()
export class EmployeeService {
    private URL = 'app/employees';

    constructor(private http:Http) {
    }

    search(term:string) {
        let employees = this.getEmployees();
        if (!term) {
            return employees;
        }
        return employees
            .map(employees => employees.filter(e => e.name.startsWith(term)));
    }

    getEmployees():Observable<Employee[]> {
        return this.http.get(this.URL)
            .map((res) => res.json().data);
    }

    getEmployee(id:number):Promise<Employee> {
        return this.getEmployees()
            .toPromise()
            .then(
                employee => employee.filter(employee => employee.id === id)[0]
            );
    }

    save(employee:Employee):Promise<Employee> {
        if (employee.id) {
            return this.put(employee);
        }
        return this.post(employee);
    }

    private post(employee:Employee):Promise<Employee> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.URL, JSON.stringify(employee), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private put(employee:Employee) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.URL}/${employee.id}`;

        return this.http
            .put(url, JSON.stringify(employee), {headers: headers})
            .toPromise()
            .then(() => employee)
            .catch(this.handleError);
    }

    delete(employee:Employee) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.URL}/${employee.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }


    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}