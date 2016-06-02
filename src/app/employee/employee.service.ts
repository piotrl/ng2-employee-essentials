import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Employee} from "./Employee";


@Injectable()
export class EmployeeService {
    private URL = 'app/employees';

    constructor(private http:Http) {
    }


    getEmployees() {
        return this.http.get(this.URL)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);

    }

    getEmployee(id:number) {
        return this.getEmployees().then(
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