import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2EmployeeEssentialsAppComponent } from '../app/ng2-employee-essentials.component';

beforeEachProviders(() => [Ng2EmployeeEssentialsAppComponent]);

describe('App: Ng2EmployeeEssentials', () => {
  it('should create the app',
      inject([Ng2EmployeeEssentialsAppComponent], (app: Ng2EmployeeEssentialsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-employee-essentials works!\'',
      inject([Ng2EmployeeEssentialsAppComponent], (app: Ng2EmployeeEssentialsAppComponent) => {
    expect(app.title).toEqual('ng2-employee-essentials works!');
  }));
});
