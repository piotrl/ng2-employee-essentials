import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { EmployeeEssentialsAppComponent } from './employee.component';

beforeEachProviders(() => [EmployeeEssentialsAppComponent]);

describe('App: Ng2EmployeeEssentials', () => {
  it('should create the app',
      inject([EmployeeEssentialsAppComponent], (app: EmployeeEssentialsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-employee-essentials works!\'',
      inject([EmployeeEssentialsAppComponent], (app: EmployeeEssentialsAppComponent) => {
    expect(app.title).toEqual('ng2-employee-essentials works!');
  }));
});
