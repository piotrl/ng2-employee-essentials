import {
    beforeEachProviders,
    describe,
    expect,
    it,
    inject
} from '@angular/core/testing';
import {AppComponent} from './app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: Ng2EmployeeEssentials', () => {
    it('should create the app',
        inject([AppComponent], (app:AppComponent) => {
            expect(app).toBeTruthy();
        }));

    it('should have as title \'Employee Essentials\'',
        inject([AppComponent], (app:AppComponent) => {
            expect(app.title).toEqual('Employee Essentials');
        }));
});
